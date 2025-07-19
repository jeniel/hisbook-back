import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { FindAllChatArgs } from './dto/find-all-chat.args';
import { Chat, ChatResponse } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @Query(() => ChatResponse)
  findChatBySession(@Args() args: FindAllChatArgs) {
    return this.chatsService.findChatBySession(args);
  }
}
