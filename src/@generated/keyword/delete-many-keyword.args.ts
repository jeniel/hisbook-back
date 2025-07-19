import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordWhereInput } from './keyword-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyKeywordArgs {

    @Field(() => KeywordWhereInput, {nullable:true})
    @Type(() => KeywordWhereInput)
    where?: KeywordWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
