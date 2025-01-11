import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { Public } from 'src/common/decorator/public.decorator';
import { AuthService } from './auth.service';
import { SignResponse } from './dto/sign-response';
import { SignUpInput } from './dto/signup-input';
import { SignInInput } from './dto/signin-input';
import { User } from 'src/@generated/user/user.model';
import { Response, Request } from 'express';

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
  @Query(() => [User], { name: 'findAllUser' })
  findAll(@Context() context: { res: Response; req: Request }) {
    // console.log(context.req.headers);
    return this.authService.findAll();
  }
}
