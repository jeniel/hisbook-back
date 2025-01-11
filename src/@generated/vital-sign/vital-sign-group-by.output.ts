import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { VitalSignCountAggregate } from './vital-sign-count-aggregate.output';
import { VitalSignAvgAggregate } from './vital-sign-avg-aggregate.output';
import { VitalSignSumAggregate } from './vital-sign-sum-aggregate.output';
import { VitalSignMinAggregate } from './vital-sign-min-aggregate.output';
import { VitalSignMaxAggregate } from './vital-sign-max-aggregate.output';

@ObjectType()
export class VitalSignGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    timestamp!: Date | string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => VitalSignCountAggregate, {nullable:true})
    _count?: VitalSignCountAggregate;

    @Field(() => VitalSignAvgAggregate, {nullable:true})
    _avg?: VitalSignAvgAggregate;

    @Field(() => VitalSignSumAggregate, {nullable:true})
    _sum?: VitalSignSumAggregate;

    @Field(() => VitalSignMinAggregate, {nullable:true})
    _min?: VitalSignMinAggregate;

    @Field(() => VitalSignMaxAggregate, {nullable:true})
    _max?: VitalSignMaxAggregate;
}
