import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@/generated/@generated/user/user.model';

@ObjectType()
export class SignResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => User)
  user: User;
  
  @Field()
  isSignedIn: boolean;
}
