import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistanceMetric } from './distance-metric.enum';

@InputType()
export class EnumDistanceMetricFieldUpdateOperationsInput {

    @Field(() => DistanceMetric, {nullable:true})
    set?: `${DistanceMetric}`;
}
