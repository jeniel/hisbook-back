import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class VitalSignAvgAggregate {

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    heartRate?: number;

    @Field(() => Float, {nullable:true})
    systolicBP?: number;

    @Field(() => Float, {nullable:true})
    diastolicBP?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    temperature?: Decimal;

    @Field(() => Float, {nullable:true})
    respiratoryRate?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    oxygenSaturation?: Decimal;
}
