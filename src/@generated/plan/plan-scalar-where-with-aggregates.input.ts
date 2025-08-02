import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPlanTypeWithAggregatesFilter } from '../prisma/enum-plan-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumBillingCycleWithAggregatesFilter } from '../prisma/enum-billing-cycle-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PlanScalarWhereWithAggregatesInput {

    @Field(() => [PlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PlanScalarWhereWithAggregatesInput)
    AND?: Array<PlanScalarWhereWithAggregatesInput>;

    @Field(() => [PlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PlanScalarWhereWithAggregatesInput)
    OR?: Array<PlanScalarWhereWithAggregatesInput>;

    @Field(() => [PlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PlanScalarWhereWithAggregatesInput)
    NOT?: Array<PlanScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumPlanTypeWithAggregatesFilter, {nullable:true})
    name?: EnumPlanTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    displayName?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    currency?: StringWithAggregatesFilter;

    @Field(() => EnumBillingCycleWithAggregatesFilter, {nullable:true})
    billingCycle?: EnumBillingCycleWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
