import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientUpdateManyMutationInput } from './patient-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PatientWhereInput } from './patient-where.input';

@ArgsType()
export class UpdateManyPatientArgs {

    @Field(() => PatientUpdateManyMutationInput, {nullable:false})
    @Type(() => PatientUpdateManyMutationInput)
    data!: PatientUpdateManyMutationInput;

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    where?: PatientWhereInput;
}
