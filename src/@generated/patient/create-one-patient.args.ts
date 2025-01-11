import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientCreateInput } from './patient-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePatientArgs {

    @Field(() => PatientCreateInput, {nullable:true})
    @Type(() => PatientCreateInput)
    data?: PatientCreateInput;
}
