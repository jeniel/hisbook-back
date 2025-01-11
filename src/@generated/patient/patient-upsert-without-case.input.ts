import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PatientUpdateWithoutCaseInput } from './patient-update-without-case.input';
import { Type } from 'class-transformer';
import { PatientCreateWithoutCaseInput } from './patient-create-without-case.input';
import { PatientWhereInput } from './patient-where.input';

@InputType()
export class PatientUpsertWithoutCaseInput {

    @Field(() => PatientUpdateWithoutCaseInput, {nullable:false})
    @Type(() => PatientUpdateWithoutCaseInput)
    update!: PatientUpdateWithoutCaseInput;

    @Field(() => PatientCreateWithoutCaseInput, {nullable:false})
    @Type(() => PatientCreateWithoutCaseInput)
    create!: PatientCreateWithoutCaseInput;

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;
}
