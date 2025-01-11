import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PatientCreateWithoutCaseInput } from './patient-create-without-case.input';
import { Type } from 'class-transformer';
import { PatientCreateOrConnectWithoutCaseInput } from './patient-create-or-connect-without-case.input';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';

@InputType()
export class PatientCreateNestedOneWithoutCaseInput {

    @Field(() => PatientCreateWithoutCaseInput, {nullable:true})
    @Type(() => PatientCreateWithoutCaseInput)
    create?: PatientCreateWithoutCaseInput;

    @Field(() => PatientCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutCaseInput)
    connectOrCreate?: PatientCreateOrConnectWithoutCaseInput;

    @Field(() => PatientWhereUniqueInput, {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;
}
