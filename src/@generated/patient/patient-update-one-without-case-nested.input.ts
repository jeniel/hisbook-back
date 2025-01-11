import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PatientCreateWithoutCaseInput } from './patient-create-without-case.input';
import { Type } from 'class-transformer';
import { PatientCreateOrConnectWithoutCaseInput } from './patient-create-or-connect-without-case.input';
import { PatientUpsertWithoutCaseInput } from './patient-upsert-without-case.input';
import { PatientWhereInput } from './patient-where.input';
import { Prisma } from '@prisma/client';
import { PatientWhereUniqueInput } from './patient-where-unique.input';
import { PatientUpdateToOneWithWhereWithoutCaseInput } from './patient-update-to-one-with-where-without-case.input';

@InputType()
export class PatientUpdateOneWithoutCaseNestedInput {

    @Field(() => PatientCreateWithoutCaseInput, {nullable:true})
    @Type(() => PatientCreateWithoutCaseInput)
    create?: PatientCreateWithoutCaseInput;

    @Field(() => PatientCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => PatientCreateOrConnectWithoutCaseInput)
    connectOrCreate?: PatientCreateOrConnectWithoutCaseInput;

    @Field(() => PatientUpsertWithoutCaseInput, {nullable:true})
    @Type(() => PatientUpsertWithoutCaseInput)
    upsert?: PatientUpsertWithoutCaseInput;

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    disconnect?: PatientWhereInput;

    @Field(() => PatientWhereInput, {nullable:true})
    @Type(() => PatientWhereInput)
    delete?: PatientWhereInput;

    @Field(() => PatientWhereUniqueInput, {nullable:true})
    @Type(() => PatientWhereUniqueInput)
    connect?: Prisma.AtLeast<PatientWhereUniqueInput, 'id'>;

    @Field(() => PatientUpdateToOneWithWhereWithoutCaseInput, {nullable:true})
    @Type(() => PatientUpdateToOneWithWhereWithoutCaseInput)
    update?: PatientUpdateToOneWithWhereWithoutCaseInput;
}
