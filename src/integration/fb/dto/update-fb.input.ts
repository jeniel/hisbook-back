import { CreateFbInput } from './create-fb.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFbInput extends PartialType(CreateFbInput) {
  @Field(() => Int)
  id: number;
}
