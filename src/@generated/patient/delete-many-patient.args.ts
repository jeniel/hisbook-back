import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientWhereInput } from './patient-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPatientArgs {

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;
}
