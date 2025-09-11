import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TicketCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    subject!: number;

    @Field(() => Int, {nullable:false})
    missedAt!: number;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:false})
    screenshot!: number;

    @Field(() => Int, {nullable:false})
    message!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    remarks!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    departmentId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
