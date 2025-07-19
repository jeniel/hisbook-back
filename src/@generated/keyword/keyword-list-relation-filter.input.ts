import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KeywordWhereInput } from './keyword-where.input';

@InputType()
export class KeywordListRelationFilter {

    @Field(() => KeywordWhereInput, {nullable:true})
    every?: KeywordWhereInput;

    @Field(() => KeywordWhereInput, {nullable:true})
    some?: KeywordWhereInput;

    @Field(() => KeywordWhereInput, {nullable:true})
    none?: KeywordWhereInput;
}
