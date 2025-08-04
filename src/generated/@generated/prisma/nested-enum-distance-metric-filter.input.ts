import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistanceMetric } from './distance-metric.enum';

@InputType()
export class NestedEnumDistanceMetricFilter {

    @Field(() => DistanceMetric, {nullable:true})
    equals?: `${DistanceMetric}`;

    @Field(() => [DistanceMetric], {nullable:true})
    in?: Array<`${DistanceMetric}`>;

    @Field(() => [DistanceMetric], {nullable:true})
    notIn?: Array<`${DistanceMetric}`>;

    @Field(() => NestedEnumDistanceMetricFilter, {nullable:true})
    not?: NestedEnumDistanceMetricFilter;
}
