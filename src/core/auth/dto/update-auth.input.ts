import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { SignUpInput } from '@/core/auth/dto/signup-input';

@InputType()
export class UpdateAuthInput extends PartialType(SignUpInput) {
  @Field(() => Int)
  id: number;
}
