import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Public } from 'src/common/decorator/public.decorator';
import { AuthService } from './auth.service';
import { SignResponse } from './dto/sign-response';
import { SignUpInput } from './dto/signup-input';
import { SignInInput } from './dto/signin-input';
import { User } from 'src/@generated/user/user.model';
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
  signin(@Args('signInInput') signInInput: SignInInput) {
    return this.authService.signin(signInInput);
  }
  @Query(() => [User], { name: 'findAllUser' })
  findAll() {
    return [];
  }
}
