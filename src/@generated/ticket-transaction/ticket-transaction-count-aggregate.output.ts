import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TicketTransactionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    ticketNumber!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    priority!: number;

    @Field(() => Int, {nullable:false})
    departmentFrom!: number;

    @Field(() => Int, {nullable:false})
    departmentTo!: number;

    @Field(() => Int, {nullable:false})
    ticketCreatedBy!: number;

    @Field(() => Int, {nullable:false})
    ticketAssignedTo!: number;

    @Field(() => Int, {nullable:false})
    ticketAssignedBy!: number;

    @Field(() => Int, {nullable:false})
    ticketCategoryId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    createdBy!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    updatedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
