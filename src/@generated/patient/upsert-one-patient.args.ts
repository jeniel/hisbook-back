import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';
import { Type } from 'class-transformer';
import { PatientCreateInput } from './patient-create.input';
import { PatientUpdateInput } from './patient-update.input';

@ArgsType()
export class UpsertOnePatientArgs {

    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;

    @Field(() => PatientCreateInput, {nullable:false})
    @Type(() => PatientCreateInput)
    create!: PatientCreateInput;

    @Field(() => PatientUpdateInput, {nullable:false})
    @Type(() => PatientUpdateInput)
    update!: PatientUpdateInput;
}
