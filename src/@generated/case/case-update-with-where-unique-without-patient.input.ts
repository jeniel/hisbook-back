import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseUpdateWithoutPatientInput } from './case-update-without-patient.input';

@InputType()
export class CaseUpdateWithWhereUniqueWithoutPatientInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;

    @Field(() => CaseUpdateWithoutPatientInput, {nullable:false})
    @Type(() => CaseUpdateWithoutPatientInput)
    data!: CaseUpdateWithoutPatientInput;
}
