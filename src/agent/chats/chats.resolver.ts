import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { n8n_chat_histories } from 'src/@generated/n-8-n-chat-histories/n-8-n-chat-histories.model';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}



  @Query(() => [n8n_chat_histories], { name: 'chats' })
  findAll() {
    return this.chatsService.findAll();
  }



 
}
