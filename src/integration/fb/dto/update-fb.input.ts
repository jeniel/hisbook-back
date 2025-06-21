import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFbInput  {
  @Field(() => Int)
  id: number;
}
