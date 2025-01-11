import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PatientWhereInput } from './patient-where.input';
import { Type } from 'class-transformer';
import { PatientUpdateWithoutCaseInput } from './patient-update-without-case.input';

@InputType()
export class PatientUpdateToOneWithWhereWithoutCaseInput {

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;

    @Field(() => PatientUpdateWithoutCaseInput, {nullable:false})
    @Type(() => PatientUpdateWithoutCaseInput)
    data!: PatientUpdateWithoutCaseInput;
}
