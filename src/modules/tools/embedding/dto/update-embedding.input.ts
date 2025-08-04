import { CreateEmbeddingInput } from '@/modules/tools/embedding/dto/create-embedding.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmbeddingInput extends PartialType(CreateEmbeddingInput) {
  @Field(() => Int)
  id: number;
}
