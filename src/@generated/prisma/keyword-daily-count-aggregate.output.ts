import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Keyword_dailyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    keyword!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Int, {nullable:false})
    date!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
