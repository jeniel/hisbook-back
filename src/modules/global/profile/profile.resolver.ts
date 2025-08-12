import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Profile } from '@/generated/profile/profile.model';
import { ProfileArgs } from '@/modules/global/profile/args/profile.args';
import { ProfileList } from '@/modules/global/profile/entities/profile.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';

import { ProfileService } from './profile.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createProfile(@Args('payload') payload: CreateProfileInput) {
    return this.profileService.create(payload);
  }

  // Find All
  @Query(() => ProfileList)
  async findAllProfiles(@Args() args: ProfileArgs) {
    return await this.profileService.findAll(args);
  }

  // Find One by ID (optional, if needed)
  @Query(() => Profile)
  findProfile(@Args('id') id: string) {
    return this.profileService.findOne(id);
  }

  // Update
  @Mutation(() => GeneralMsg)
  updateProfile(
    @Args('id') id: string,
    @Args('payload') payload: UpdateProfileInput,
  ) {
    return this.profileService.update(id, payload);
  }

  // Delete
  @Mutation(() => GeneralMsg)
  deleteProfile(@Args('id') id: string) {
    return this.profileService.delete(id);
  }
}
