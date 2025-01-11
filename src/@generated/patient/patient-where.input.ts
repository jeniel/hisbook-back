import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumGenderNullableFilter } from '../prisma/enum-gender-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CaseListRelationFilter } from '../case/case-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PatientWhereInput {

    @Field(() => [PatientWhereInput], {nullable:true})
    AND?: Array<PatientWhereInput>;

    @Field(() => [PatientWhereInput], {nullable:true})
    OR?: Array<PatientWhereInput>;

    @Field(() => [PatientWhereInput], {nullable:true})
    NOT?: Array<PatientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pid?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middleName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthDate?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    address?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    contact?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    identification?: JsonNullableFilter;

    @Field(() => EnumGenderNullableFilter, {nullable:true})
    gender?: EnumGenderNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isDeceased?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => CaseListRelationFilter, {nullable:true})
    @Type(() => CaseListRelationFilter)
    case?: CaseListRelationFilter;
}
