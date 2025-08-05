import { User } from '@/generated/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

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
