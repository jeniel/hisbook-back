import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FacebookPage } from '@/generated/@generated/facebook-page/facebook-page.model';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { FacebookPageArgs } from '@/modules/integration/fb/args/fb.args';
import { CreatePostPage } from '@/modules/integration/fb/dto/create-fb.input';
import { FaceBookPageList } from '@/modules/integration/fb/entities/fb.entity';
import { FbService } from '@/modules/integration/fb/fb.service';

@Resolver(() => FacebookPage)
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

  @Query(() => FaceBookPageList)
  async findAllFbDetails(@Args() args: FacebookPageArgs) {
    return this.fbService.findAllFbDetails(args);
  }
}
