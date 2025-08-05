import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserProfileInput } from './dto/create-user.input';

import { AuthService } from '@/core/auth/auth.service';
import { Role } from '@/generated/prisma/role.enum';
import { Profile } from '@/generated/profile/profile.model';
import { User } from '@/generated/user/user.model';
import { Roles } from '@/shared/common/decorator/roles.decorator';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { UserProfileArgs } from './args/user.args';
import { UserList } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Roles([Role.ADMIN])
  @Mutation(() => GeneralMsg)
  createSuperAdmin(@Args('createUserInput') payload: CreateUserProfileInput) {
    return this.userService.createSuperAdmin(payload);
  }

  @Roles([Role.ADMIN])
  @Query(() => UserList)
  findAllUsers(@Args() args: UserProfileArgs) {
    return this.userService.findAll(args);
  }

  @Query(() => Profile)
  findOneUser(@Args('profileId') profileId: string) {
    return this.userService.findOne(profileId);
  }
}
