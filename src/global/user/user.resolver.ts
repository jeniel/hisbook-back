import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { CreateUserProfileInput } from './dto/create-user.input';
import { InviteUserInput, CompleteProfileInput } from './dto/invite-user.input';
import {
  InviteUserResponse,
  CompleteProfileResponse,
} from './dto/invite-user.response';

import { User } from 'src/@generated/user/user.model';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { UserList } from './entities/user.entity';
import { UserService } from './user.service';
import { UserProfileArgs } from './args/user.args';
import { Profile } from 'src/@generated/profile/profile.model';
import { Roles } from 'src/common/decorator/roles.decorator';
import { Role } from 'src/@generated/prisma/role.enum';
import { UseGuards } from '@nestjs/common';
import { Public } from 'src/common/decorator/public.decorator';
import { AuthService } from 'src/auth/auth.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Roles([Role.SUPER_ADMIN])
  @Mutation(() => GeneralMsg)
  createSuperAdmin(@Args('createUserInput') payload: CreateUserProfileInput) {
    return this.userService.createSuperAdmin(payload);
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

  @Roles([Role.ADMIN, Role.SUPER_ADMIN, Role.CLIENT_ADMIN])
  @Mutation(() => InviteUserResponse)
  inviteUser(
    @Args('inviteUserInput') payload: InviteUserInput,
    @Context() context: any,
  ) {
    // Extract user ID from context (assuming you have authentication)
    const invitedBy = context.req?.user?.id || 'system';
    return this.userService.inviteUser(payload, invitedBy);
  }

  // No authentication required - token validation provides security
  @Public()
  @Mutation(() => CompleteProfileResponse)
  async completeProfile(
    @Args('completeProfileInput') payload: CompleteProfileInput,
    @Context() context: any,
  ) {
    // Log the IP for security monitoring (optional)
    const clientIp = context.req?.ip || context.req?.connection?.remoteAddress;
    console.log(`Profile completion attempt from IP: ${clientIp}`);

    // Complete the profile first
    const profileResult = await this.userService.completeProfile(payload);

    // If profile completion was successful, automatically sign in the user
    if (profileResult.success && profileResult.email) {
      try {
        // Create signin payload with the new credentials
        const signinPayload = {
          email: profileResult.email,
          username: payload.username,
          password: payload.password,
        };

        // Call the signin method to set the cookie and get tokens
        await this.authService.signin(signinPayload, context);

        console.log(
          `User ${payload.username} automatically signed in after profile completion`,
        );
      } catch (error) {
        console.error('Failed to auto-signin after profile completion:', error);
        // Don't throw error here - profile completion was successful
        // User can still manually sign in
      }
    }

    return profileResult;
  }

  // No authentication required - this is used to validate invitation links
  @Public()
  @Query(() => Boolean)
  validateInvitationToken(
    @Args('token') token: string,
    @Args('email') email: string,
    @Args('tenantId', { nullable: true }) tenantId?: string,
  ) {
    return this.userService.validateInvitationToken(token, email, tenantId);
  }

  // // No authentication required - this is used to check username availability during profile completion
  // @Public()
  // @Query(() => Boolean)
  // checkUsernameAvailability(
  //   @Args('username') username: string,
  //   @Args('tenantId', { nullable: true }) tenantId?: string,
  // ) {
  //   return this.userService.checkUsernameAvailability(username, tenantId);
  // }
}
