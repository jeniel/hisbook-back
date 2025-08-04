import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@/generated/@generated/user/user.model';

@ObjectType()
export class MeQuery {
  @Field()
  isSignedIn: boolean;

  @Field(() => User)
  user: User;
}
