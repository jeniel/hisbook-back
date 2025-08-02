import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanType } from './plan-type.enum';
import { NestedEnumPlanTypeWithAggregatesFilter } from './nested-enum-plan-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPlanTypeFilter } from './nested-enum-plan-type-filter.input';

@InputType()
export class EnumPlanTypeWithAggregatesFilter {

    @Field(() => PlanType, {nullable:true})
    equals?: `${PlanType}`;

    @Field(() => [PlanType], {nullable:true})
    in?: Array<`${PlanType}`>;

    @Field(() => [PlanType], {nullable:true})
    notIn?: Array<`${PlanType}`>;

    @Field(() => NestedEnumPlanTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlanTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPlanTypeFilter, {nullable:true})
    _min?: NestedEnumPlanTypeFilter;

    @Field(() => NestedEnumPlanTypeFilter, {nullable:true})
    _max?: NestedEnumPlanTypeFilter;
}
