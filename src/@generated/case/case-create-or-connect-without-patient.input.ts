import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutPatientInput } from './case-create-without-patient.input';

@InputType()
export class CaseCreateOrConnectWithoutPatientInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;

    @Field(() => CaseCreateWithoutPatientInput, {nullable:false})
    @Type(() => CaseCreateWithoutPatientInput)
    create!: CaseCreateWithoutPatientInput;
}
