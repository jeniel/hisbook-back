import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => String, {nullable:true})
    message_intent?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => String, {nullable:true})
    keyword?: string;
}
