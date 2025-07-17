import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsCreateInput } from './keywords-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnekeywordsArgs {

    @Field(() => keywordsCreateInput, {nullable:false})
    @Type(() => keywordsCreateInput)
    data!: keywordsCreateInput;
}
