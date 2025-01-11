import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutPatientInput } from './case-create-without-patient.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutPatientInput } from './case-create-or-connect-without-patient.input';
import { CaseUpsertWithWhereUniqueWithoutPatientInput } from './case-upsert-with-where-unique-without-patient.input';
import { CaseCreateManyPatientInputEnvelope } from './case-create-many-patient-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateWithWhereUniqueWithoutPatientInput } from './case-update-with-where-unique-without-patient.input';
import { CaseUpdateManyWithWhereWithoutPatientInput } from './case-update-many-with-where-without-patient.input';
import { CaseScalarWhereInput } from './case-scalar-where.input';

@InputType()
export class CaseUncheckedUpdateManyWithoutPatientNestedInput {

    @Field(() => [CaseCreateWithoutPatientInput], {nullable:true})
    @Type(() => CaseCreateWithoutPatientInput)
    create?: Array<CaseCreateWithoutPatientInput>;

    @Field(() => [CaseCreateOrConnectWithoutPatientInput], {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutPatientInput)
    connectOrCreate?: Array<CaseCreateOrConnectWithoutPatientInput>;

    @Field(() => [CaseUpsertWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => CaseUpsertWithWhereUniqueWithoutPatientInput)
    upsert?: Array<CaseUpsertWithWhereUniqueWithoutPatientInput>;

    @Field(() => CaseCreateManyPatientInputEnvelope, {nullable:true})
    @Type(() => CaseCreateManyPatientInputEnvelope)
    createMany?: CaseCreateManyPatientInputEnvelope;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CaseWhereUniqueInput, 'id'>>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CaseWhereUniqueInput, 'id'>>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CaseWhereUniqueInput, 'id'>>;

    @Field(() => [CaseWhereUniqueInput], {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CaseWhereUniqueInput, 'id'>>;

    @Field(() => [CaseUpdateWithWhereUniqueWithoutPatientInput], {nullable:true})
    @Type(() => CaseUpdateWithWhereUniqueWithoutPatientInput)
    update?: Array<CaseUpdateWithWhereUniqueWithoutPatientInput>;

    @Field(() => [CaseUpdateManyWithWhereWithoutPatientInput], {nullable:true})
    @Type(() => CaseUpdateManyWithWhereWithoutPatientInput)
    updateMany?: Array<CaseUpdateManyWithWhereWithoutPatientInput>;

    @Field(() => [CaseScalarWhereInput], {nullable:true})
    @Type(() => CaseScalarWhereInput)
    deleteMany?: Array<CaseScalarWhereInput>;
}
