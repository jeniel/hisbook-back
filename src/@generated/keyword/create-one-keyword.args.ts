import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordCreateInput } from './keyword-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneKeywordArgs {

    @Field(() => KeywordCreateInput, {nullable:false})
    @Type(() => KeywordCreateInput)
    data!: KeywordCreateInput;
}
