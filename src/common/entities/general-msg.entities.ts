import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';

@ObjectType()
export class GeneralMsg {
  @Field(() => String)
  message: string;
}
