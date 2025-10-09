import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';

import { AuthService } from '@/core/auth/auth.service';
import { User } from '@/generated/user/user.model';
import { UpdateUserInput } from '@/modules/global/user/dto/update-user.input';
import { UserList } from '@/modules/global/user/entities/user.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { UserArgs } from './args/user.args';
import { UserService } from './user.service';

// Import Roles
import { Role } from '@/generated/prisma/role.enum';
import { Public } from '@/shared/common/decorator/public.decorator';
import { Roles } from '@/shared/common/decorator/roles.decorator';

@Resolver(() => User)
export class UserResolver {
  prisma: any;
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // Create User
  @Mutation(() => GeneralMsg)
  @Public()
  createUser(@Args('payload') payload: CreateUserInput) {
    return this.userService.createUser(payload);
  }

  // Find All
  @Query(() => UserList)
  @Roles([Role.ADMIN])
  async findAllUsers(@Args() args: UserArgs) {
    return await this.userService.findAll(args);
  }

  // Update
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  async updateUser(
    @Args('id') id: string,
    @Args('payload') payload: UpdateUserInput,
  ) {
    return this.userService.update(id, payload);
  }

  // Delete User
  @Mutation(() => GeneralMsg)
  @Roles([Role.ADMIN])
  deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }

  // @Roles([Role.ADMIN])
  // @Mutation(() => GeneralMsg)
  // createSuperAdmin(@Args('createUserInput') payload: CreateUserProfileInput) {
  //   return this.userService.createSuperAdmin(payload);
  // }

  // @Query(() => Profile)
  // findOneUser(@Args('profileId') profileId: string) {
  //   return this.userService.findOne(profileId);
  // }
}
