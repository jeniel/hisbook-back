import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Patient } from '../patient/patient.model';
import { VitalSign } from '../vital-sign/vital-sign.model';
import { CaseCount } from './case-count.output';

@ObjectType()
export class Case {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    cid!: string | null;

    @Field(() => String, {nullable:true})
    caseNo!: string | null;

    @Field(() => String, {nullable:true})
    priceGroup!: string | null;

    @Field(() => Int, {nullable:true})
    ageOnReg!: number | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    caseStatus!: boolean | null;

    @Field(() => String, {nullable:true})
    maritalStatus!: string | null;

    @Field(() => String, {nullable:true})
    patientId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Patient, {nullable:true})
    patient?: Patient | null;

    @Field(() => [VitalSign], {nullable:true})
    vitalSign?: Array<VitalSign>;

    @Field(() => CaseCount, {nullable:false})
    _count?: CaseCount;
}
