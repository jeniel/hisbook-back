import { User } from '@/generated/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MeQuery {
  @Field()
  isSignedIn: boolean;

  @Field(() => User)
  user: User;
}
