import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { User } from '@/generated/@generated/user/user.model';
import { Public } from '@/shared/common/decorator/public.decorator';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { AuthService } from '@/core/auth/auth.service';
import { SignResponse } from '@/core/auth/dto/sign-response';
import { SignInInput } from '@/core/auth/dto/signin-input';
import { SignUpInput } from '@/core/auth/dto/signup-input';
import { MeQuery } from '@/core/auth/entities/me.entities';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => SignResponse)
  signup(@Args('signUpInput') signUpInput: SignUpInput) {
    return this.authService.signup(signUpInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  signin(
    @Args('signInInput') signInInput: SignInInput,
    @Context() context: { res: Response; req: Request },
  ) {
    // const csrfToken = context.req.headers['x-csrf-token'];
    // console.log('CSRF Token:', csrfToken);
    // console.log(context.req.headers);
    return this.authService.signin(signInInput, context);
  }

  @Public()
  @Mutation(() => GeneralMsg)
  logOut(@Context() context: { res: Response; req: Request }) {
    return this.authService.logOut(context);
  }

  @Query(() => MeQuery)
  meQuery(@Context() context: { res: Response; req: Request }) {
    return this.authService.meQuery(context);
  }
}
