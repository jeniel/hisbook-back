import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { FindAllChatArgs } from './dto/find-all-chat.args';
import { FindAllChatWithoutSessionArgs } from './dto/find-all-chat-without-session.args';
import { Chat, ChatResponse } from './entities/chat.entity';
import { Roles } from 'src/common/decorator/roles.decorator';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}


 
  @Query(() => ChatResponse)
  findChatBySession(@Args() args: FindAllChatArgs) {
    return this.chatsService.findChatBySession(args);
  }

  @Query(() => ChatResponse)
  findAllChat(@Args() args: FindAllChatWithoutSessionArgs) {
    return this.chatsService.findAllChat(args);
  }




}
