import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePatientOrThrowArgs {

    @Field(() => PatientWhereUniqueInput, {nullable:false})
    @Type(() => PatientWhereUniqueInput)
    where!: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;
}
