import { CreateLangChainInput } from '@/modules/tools/lang-chain/dto/create-lang-chain.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLangChainInput extends PartialType(CreateLangChainInput) {
  @Field(() => Int)
  id: number;
}
