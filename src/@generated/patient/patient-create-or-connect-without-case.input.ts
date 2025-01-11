import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';
import { Type } from 'class-transformer';
import { PatientCreateWithoutCaseInput } from './patient-create-without-case.input';

@InputType()
export class PatientCreateOrConnectWithoutCaseInput {

    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;

    @Field(() => PatientCreateWithoutCaseInput, {nullable:false})
    @Type(() => PatientCreateWithoutCaseInput)
    create!: PatientCreateWithoutCaseInput;
}
