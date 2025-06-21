import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { CreatePostPage } from './dto/create-fb.input';
import { Fb } from './entities/fb.entity';
import { FbService } from './fb.service';

@Resolver(() => Fb)
export class FbResolver {
  constructor(private readonly fbService: FbService) {}

  @Query(() => GeneralMsg)
  syncToGraphApi() {
    return this.fbService.syncToGraphApi();
  }


  @Mutation(() => GeneralMsg)
  createPagePost(@Args('CreatePostInput') payload: CreatePostPage) {
    return this.fbService.createPagePost(payload);
  }
}
