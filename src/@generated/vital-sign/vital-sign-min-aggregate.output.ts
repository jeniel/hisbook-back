import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class VitalSignMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Int, {nullable:true})
    heartRate?: number;

    @Field(() => Int, {nullable:true})
    systolicBP?: number;

    @Field(() => Int, {nullable:true})
    diastolicBP?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    temperature?: Decimal;

    @Field(() => Int, {nullable:true})
    respiratoryRate?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    oxygenSaturation?: Decimal;

    @Field(() => String, {nullable:true})
    caseId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
