import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';

import { AuthService } from '@/core/auth/auth.service';
import { Role } from '@/generated/prisma/role.enum';
// import { Profile } from '@/generated/profile/profile.model';
import { User } from '@/generated/user/user.model';
import { Roles } from '@/shared/common/decorator/roles.decorator';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { UserArgs } from './args/user.args';
// import { UserList } from './entities/user.entity';
import { UserService } from './user.service';
import { UserList } from '@/modules/global/user/entities/user.entity';
import { UpdateUserInput } from '@/modules/global/user/dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  prisma: any;
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // Create User
  @Roles([Role.ADMIN]) // ONLY ADMIN ROLES HAS ACCESS FOR THIS
  @Mutation(() => GeneralMsg)
  createUser(@Args('payload') payload: CreateUserInput) {
    return this.prisma.userService.createUser(payload);
  }

  // Find All
  @Roles([Role.ADMIN])
  @Query(() => UserList)
  async findAllUsers(@Args() args: UserArgs) {
    return await this.userService.findAll(args);
  }

  // Update
  @Roles([Role.ADMIN])
  async updateUser(id: string, data: UpdateUserInput) {
    await this.prisma.userService.update({
      where: { id },
      data,
    });

    return {
      message: 'User updated successfully',
      success: true,
    };
  }

  // Delete User
  @Roles([Role.ADMIN])
  @Mutation(() => GeneralMsg)
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
