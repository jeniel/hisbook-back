import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsWhereInput } from '../keywords/keywords-where.input';

@InputType()
export class KeywordsListRelationFilter {

    @Field(() => keywordsWhereInput, {nullable:true})
    every?: keywordsWhereInput;

    @Field(() => keywordsWhereInput, {nullable:true})
    some?: keywordsWhereInput;

    @Field(() => keywordsWhereInput, {nullable:true})
    none?: keywordsWhereInput;
}
