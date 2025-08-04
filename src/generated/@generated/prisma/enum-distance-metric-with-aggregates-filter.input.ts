import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistanceMetric } from './distance-metric.enum';
import { NestedEnumDistanceMetricWithAggregatesFilter } from './nested-enum-distance-metric-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDistanceMetricFilter } from './nested-enum-distance-metric-filter.input';

@InputType()
export class EnumDistanceMetricWithAggregatesFilter {

    @Field(() => DistanceMetric, {nullable:true})
    equals?: `${DistanceMetric}`;

    @Field(() => [DistanceMetric], {nullable:true})
    in?: Array<`${DistanceMetric}`>;

    @Field(() => [DistanceMetric], {nullable:true})
    notIn?: Array<`${DistanceMetric}`>;

    @Field(() => NestedEnumDistanceMetricWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDistanceMetricWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDistanceMetricFilter, {nullable:true})
    _min?: NestedEnumDistanceMetricFilter;

    @Field(() => NestedEnumDistanceMetricFilter, {nullable:true})
    _max?: NestedEnumDistanceMetricFilter;
}
