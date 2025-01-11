import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignWhereInput } from './vital-sign-where.input';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { CaseNullableScalarRelationFilter } from '../prisma/case-nullable-scalar-relation-filter.input';

@InputType()
export class VitalSignWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [VitalSignWhereInput], {nullable:true})
    @Type(() => VitalSignWhereInput)
    AND?: Array<VitalSignWhereInput>;

    @Field(() => [VitalSignWhereInput], {nullable:true})
    @Type(() => VitalSignWhereInput)
    OR?: Array<VitalSignWhereInput>;

    @Field(() => [VitalSignWhereInput], {nullable:true})
    @Type(() => VitalSignWhereInput)
    NOT?: Array<VitalSignWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    heartRate?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    systolicBP?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    diastolicBP?: IntNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    temperature?: DecimalNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    respiratoryRate?: IntNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    oxygenSaturation?: DecimalNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caseId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => CaseNullableScalarRelationFilter, {nullable:true})
    @Type(() => CaseNullableScalarRelationFilter)
    case?: CaseNullableScalarRelationFilter;
}
