import { Document } from '@langchain/core/documents';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { promises as fs } from 'fs';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

export interface ChatMessage {
  user: string;
  assistant: string;
}

@Injectable()
export class LangchainService implements OnModuleInit {
  private chain: RunnableSequence<
    { userId: string; question: string },
    string
  > | null = null;
  private chatHistories: Map<string, ChatMessage[]> = new Map();

  async onModuleInit(): Promise<void> {
    // 1️⃣ Load Markdown file
    const filePath = process.env.MD_FILE_PATH || 'data/data.md';
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // 2️⃣ Split text into chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 100,
    });
    const chunks: Document[] = await splitter.createDocuments([fileContent]);

    // 3️⃣ Create vector store
    const vectorStore = await MemoryVectorStore.fromDocuments(
      chunks,
      new OpenAIEmbeddings(),
    );
    const retriever = vectorStore.asRetriever({ k: 2 });

    // 4️⃣ Create LLM
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      maxTokens: 1000,
    });

    // 5️⃣ Create LangChain sequence
    this.chain = RunnableSequence.from([
      async ({ userId, question }: { userId: string; question: string }) => {
        const history = this.chatHistories.get(userId) || [];
        const historyText = history
          .slice(-5)
          .map((h) => `User: ${h.user}\nAssistant: ${h.assistant}`)
          .join('\n\n');

        const relevantDocs: Document[] = await retriever.invoke(question);

        return {
          history: historyText,
          context: relevantDocs
            .map((doc) => `Source: Markdown File\n${doc.pageContent}`)
            .join('\n\n'),
          question,
        };
      },
      async ({
        history,
        context,
        question,
      }: {
        history: string;
        context: string;
        question: string;
      }) => {
        const prompt = `
        You are a helpful assistant. Use the following Markdown content as reference.
        Chat History:
        ${history}
        Relevant Context:
        ${context}
        User Question: ${question}
        Answer clearly and conversationally.
        Answer:`;
        return await model.invoke(prompt);
      },
      new StringOutputParser(),
    ]);
  }

  // Prompt input from user
  async ask(userId: string, question: string): Promise<string> {
    if (!this.chain) throw new Error('LangChain not initialized yet.');

    // Run the chain with the user ID and question
    const response: string = await this.chain.invoke({ userId, question });

    // Save response in this user's history
    const history = this.chatHistories.get(userId) || [];
    history.push({ user: question, assistant: response });
    this.chatHistories.set(userId, history);

    return response;
  }

  // Chat History
  getHistory(userId: string): ChatMessage[] {
    return this.chatHistories.get(userId) || [];
  }
}
