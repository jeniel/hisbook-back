import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlanScalarRelationFilter } from '../plan/plan-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { FeatureScalarRelationFilter } from '../feature/feature-scalar-relation-filter.input';

@InputType()
export class PlanFeatureWhereInput {

    @Field(() => [PlanFeatureWhereInput], {nullable:true})
    AND?: Array<PlanFeatureWhereInput>;

    @Field(() => [PlanFeatureWhereInput], {nullable:true})
    OR?: Array<PlanFeatureWhereInput>;

    @Field(() => [PlanFeatureWhereInput], {nullable:true})
    NOT?: Array<PlanFeatureWhereInput>;

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

    @Field(() => PlanScalarRelationFilter, {nullable:true})
    @Type(() => PlanScalarRelationFilter)
    plan?: PlanScalarRelationFilter;

    @Field(() => FeatureScalarRelationFilter, {nullable:true})
    feature?: FeatureScalarRelationFilter;
}
