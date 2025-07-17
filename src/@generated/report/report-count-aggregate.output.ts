import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    session_id!: number;

    @Field(() => Int, {nullable:false})
    keywords!: number;

    @Field(() => Int, {nullable:false})
    message_intent!: number;

    @Field(() => Int, {nullable:false})
    tenantId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdBy!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Int, {nullable:false})
    keyword!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
