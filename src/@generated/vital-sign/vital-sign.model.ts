import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Case } from '../case/case.model';

@ObjectType()
export class VitalSign {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => Int, {nullable:true})
    heartRate!: number | null;

    @Field(() => Int, {nullable:true})
    systolicBP!: number | null;

    @Field(() => Int, {nullable:true})
    diastolicBP!: number | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    temperature!: Decimal | null;

    @Field(() => Int, {nullable:true})
    respiratoryRate!: number | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    oxygenSaturation!: Decimal | null;

    @Field(() => String, {nullable:true})
    caseId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Case, {nullable:true})
    case?: Case | null;
}
