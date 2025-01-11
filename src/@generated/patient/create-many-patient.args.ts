import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientCreateManyInput } from './patient-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPatientArgs {

    @Field(() => [PatientCreateManyInput], {nullable:false})
    @Type(() => PatientCreateManyInput)
    data!: Array<PatientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
