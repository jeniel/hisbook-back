import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { VitalSignCountOrderByAggregateInput } from './vital-sign-count-order-by-aggregate.input';
import { VitalSignAvgOrderByAggregateInput } from './vital-sign-avg-order-by-aggregate.input';
import { VitalSignMaxOrderByAggregateInput } from './vital-sign-max-order-by-aggregate.input';
import { VitalSignMinOrderByAggregateInput } from './vital-sign-min-order-by-aggregate.input';
import { VitalSignSumOrderByAggregateInput } from './vital-sign-sum-order-by-aggregate.input';

@InputType()
export class VitalSignOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    heartRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    systolicBP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    diastolicBP?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    temperature?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    respiratoryRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    oxygenSaturation?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    caseId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    createdBy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedBy?: SortOrderInput;

    @Field(() => VitalSignCountOrderByAggregateInput, {nullable:true})
    @Type(() => VitalSignCountOrderByAggregateInput)
    _count?: VitalSignCountOrderByAggregateInput;

    @Field(() => VitalSignAvgOrderByAggregateInput, {nullable:true})
    @Type(() => VitalSignAvgOrderByAggregateInput)
    _avg?: VitalSignAvgOrderByAggregateInput;

    @Field(() => VitalSignMaxOrderByAggregateInput, {nullable:true})
    @Type(() => VitalSignMaxOrderByAggregateInput)
    _max?: VitalSignMaxOrderByAggregateInput;

    @Field(() => VitalSignMinOrderByAggregateInput, {nullable:true})
    @Type(() => VitalSignMinOrderByAggregateInput)
    _min?: VitalSignMinOrderByAggregateInput;

    @Field(() => VitalSignSumOrderByAggregateInput, {nullable:true})
    @Type(() => VitalSignSumOrderByAggregateInput)
    _sum?: VitalSignSumOrderByAggregateInput;
}
