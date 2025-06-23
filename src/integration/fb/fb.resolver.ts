import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FacebookPage } from 'src/@generated/facebook-page/facebook-page.model';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { FacebookPageArgs } from './args/fb.args';
import { CreatePostPage } from './dto/create-fb.input';
import { FaceBookPageList } from './entities/fb.entity';
import { FbService } from './fb.service';

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
