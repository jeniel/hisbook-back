import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PatientNullableScalarRelationFilter } from '../prisma/patient-nullable-scalar-relation-filter.input';
import { VitalSignListRelationFilter } from '../vital-sign/vital-sign-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class CaseWhereInput {

    @Field(() => [CaseWhereInput], {nullable:true})
    AND?: Array<CaseWhereInput>;

    @Field(() => [CaseWhereInput], {nullable:true})
    OR?: Array<CaseWhereInput>;

    @Field(() => [CaseWhereInput], {nullable:true})
    NOT?: Array<CaseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cid?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caseNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    priceGroup?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    ageOnReg?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    caseStatus?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    maritalStatus?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    patientId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => PatientNullableScalarRelationFilter, {nullable:true})
    patient?: PatientNullableScalarRelationFilter;

    @Field(() => VitalSignListRelationFilter, {nullable:true})
    @Type(() => VitalSignListRelationFilter)
    vitalSign?: VitalSignListRelationFilter;
}
