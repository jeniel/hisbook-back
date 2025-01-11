import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GeneralMsg {
  @Field(() => String)
  message: string;
}
