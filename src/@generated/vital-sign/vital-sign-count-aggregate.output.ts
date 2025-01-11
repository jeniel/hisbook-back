import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VitalSignCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    timestamp!: number;

    @Field(() => Int, {nullable:false})
    heartRate!: number;

    @Field(() => Int, {nullable:false})
    systolicBP!: number;

    @Field(() => Int, {nullable:false})
    diastolicBP!: number;

    @Field(() => Int, {nullable:false})
    temperature!: number;

    @Field(() => Int, {nullable:false})
    respiratoryRate!: number;

    @Field(() => Int, {nullable:false})
    oxygenSaturation!: number;

    @Field(() => Int, {nullable:false})
    caseId!: number;

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
