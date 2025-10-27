import { Field, InputType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class CreateManyUsersInput {
  @Field(() => [CreateUserInput])
  users: CreateUserInput[];
}
