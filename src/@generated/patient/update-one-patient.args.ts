import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PatientUpdateInput } from './patient-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';

@ArgsType()
export class UpdateOnePatientArgs {

    @Field(() => PatientUpdateInput, {nullable:false})
    @Type(() => PatientUpdateInput)
    data!: PatientUpdateInput;

    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;
}
