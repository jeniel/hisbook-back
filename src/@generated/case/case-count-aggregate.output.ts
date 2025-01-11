import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CaseCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    cid!: number;

    @Field(() => Int, {nullable:false})
    caseNo!: number;

    @Field(() => Int, {nullable:false})
    priceGroup!: number;

    @Field(() => Int, {nullable:false})
    ageOnReg!: number;

    @Field(() => Int, {nullable:false})
    caseStatus!: number;

    @Field(() => Int, {nullable:false})
    maritalStatus!: number;

    @Field(() => Int, {nullable:false})
    patientId!: number;

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
