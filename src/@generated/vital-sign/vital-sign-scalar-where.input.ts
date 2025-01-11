import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class VitalSignScalarWhereInput {

    @Field(() => [VitalSignScalarWhereInput], {nullable:true})
    @Type(() => VitalSignScalarWhereInput)
    AND?: Array<VitalSignScalarWhereInput>;

    @Field(() => [VitalSignScalarWhereInput], {nullable:true})
    @Type(() => VitalSignScalarWhereInput)
    OR?: Array<VitalSignScalarWhereInput>;

    @Field(() => [VitalSignScalarWhereInput], {nullable:true})
    @Type(() => VitalSignScalarWhereInput)
    NOT?: Array<VitalSignScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
