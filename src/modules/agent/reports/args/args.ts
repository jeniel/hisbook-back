import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { keywordsWhereInput } from '@/generated/@generated/keywords/keywords-where.input';

@ArgsType()
export class GetAllKeyWorkByTenantArgs {
  @Field(() => keywordsWhereInput, { nullable: true })
  @Type(() => keywordsWhereInput)
  where?: keywordsWhereInput;
}
