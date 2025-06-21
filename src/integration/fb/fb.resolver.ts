import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FbService } from './fb.service';
import { Fb } from './entities/fb.entity';
import { CreateFbInput } from './dto/create-fb.input';
import { UpdateFbInput } from './dto/update-fb.input';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';

@Resolver(() => Fb)
export class FbResolver {
  constructor(private readonly fbService: FbService) {}

  @Query(() => GeneralMsg)
  syncToGraphApi() {
    return this.fbService.syncToGraphApi();
  }
}
