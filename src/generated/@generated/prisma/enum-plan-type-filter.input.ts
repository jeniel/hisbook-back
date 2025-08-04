import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanType } from './plan-type.enum';
import { NestedEnumPlanTypeFilter } from './nested-enum-plan-type-filter.input';

@InputType()
export class EnumPlanTypeFilter {

    @Field(() => PlanType, {nullable:true})
    equals?: `${PlanType}`;

    @Field(() => [PlanType], {nullable:true})
    in?: Array<`${PlanType}`>;

    @Field(() => [PlanType], {nullable:true})
    notIn?: Array<`${PlanType}`>;

    @Field(() => NestedEnumPlanTypeFilter, {nullable:true})
    not?: NestedEnumPlanTypeFilter;
}
