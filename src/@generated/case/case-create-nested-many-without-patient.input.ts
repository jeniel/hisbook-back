import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutPatientInput } from './case-create-without-patient.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutPatientInput } from './case-create-or-connect-without-patient.input';
import { CaseCreateManyPatientInputEnvelope } from './case-create-many-patient-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedManyWithoutPatientInput {

    @Field(() => [CaseCreateWithoutPatientInput], {nullable:true})
    @Type(() => CaseCreateWithoutPatientInput)
    create?: Array<CaseCreateWithoutPatientInput>;

    @Field(() => [CaseCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<CaseCreateOrConnectWithoutPatientInput>;

    @Field(() => CaseCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => CaseCreateManyPatientInputEnvelope)
    createMany?: CaseCreateManyPatientInputEnvelope;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CaseWhereUniqueInput, 'id'>>;
}
