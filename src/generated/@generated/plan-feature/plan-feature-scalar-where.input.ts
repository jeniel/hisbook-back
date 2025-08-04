import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PlanFeatureScalarWhereInput {

    @Field(() => [PlanFeatureScalarWhereInput], {nullable:true})
    AND?: Array<PlanFeatureScalarWhereInput>;

    @Field(() => [PlanFeatureScalarWhereInput], {nullable:true})
    OR?: Array<PlanFeatureScalarWhereInput>;

    @Field(() => [PlanFeatureScalarWhereInput], {nullable:true})
    NOT?: Array<PlanFeatureScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    planId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    featureId?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    limit?: IntNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
