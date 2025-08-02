import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserProfileInput } from './dto/create-user.input';

import { User } from 'src/@generated/user/user.model';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { UserList } from './entities/user.entity';
import { UserService } from './user.service';
import { UserProfileArgs } from './args/user.args';
import { Profile } from 'src/@generated/profile/profile.model';
import { Roles } from 'src/common/decorator/roles.decorator';
import { Role } from 'src/@generated/prisma/role.enum';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => GeneralMsg)
  createUser(@Args('createUserInput') payload: CreateUserProfileInput) {
    return this.userService.create(payload);
  }

  @Roles([Role.SUPER_ADMIN])
  @Query(() => UserList)
  findAllUsers(@Args() args: UserProfileArgs) {
    return this.userService.findAll(args);
  }

  @Query(() => Profile)
  findOneUser(@Args('profileId') profileId: string) {
    return this.userService.findOne(profileId);
  }
}
