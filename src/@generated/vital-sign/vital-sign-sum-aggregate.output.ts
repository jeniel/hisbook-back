import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class VitalSignSumAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;

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
}
