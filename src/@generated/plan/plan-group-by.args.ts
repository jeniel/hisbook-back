import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { PlanOrderByWithAggregationInput } from './plan-order-by-with-aggregation.input';
import { PlanScalarFieldEnum } from './plan-scalar-field.enum';
import { PlanScalarWhereWithAggregatesInput } from './plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PlanCountAggregateInput } from './plan-count-aggregate.input';
import { PlanAvgAggregateInput } from './plan-avg-aggregate.input';
import { PlanSumAggregateInput } from './plan-sum-aggregate.input';
import { PlanMinAggregateInput } from './plan-min-aggregate.input';
import { PlanMaxAggregateInput } from './plan-max-aggregate.input';

@ArgsType()
export class PlanGroupByArgs {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => [PlanOrderByWithAggregationInput], {nullable:true})
    @Type(() => PlanOrderByWithAggregationInput)
    orderBy?: Array<PlanOrderByWithAggregationInput>;

    @Field(() => [PlanScalarFieldEnum], {nullable:false})
    by!: Array<`${PlanScalarFieldEnum}`>;

    @Field(() => PlanScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => PlanScalarWhereWithAggregatesInput)
    having?: PlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PlanCountAggregateInput, {nullable:true})
    @Type(() => PlanCountAggregateInput)
    _count?: PlanCountAggregateInput;

    @Field(() => PlanAvgAggregateInput, {nullable:true})
    @Type(() => PlanAvgAggregateInput)
    _avg?: PlanAvgAggregateInput;

    @Field(() => PlanSumAggregateInput, {nullable:true})
    @Type(() => PlanSumAggregateInput)
    _sum?: PlanSumAggregateInput;

    @Field(() => PlanMinAggregateInput, {nullable:true})
    @Type(() => PlanMinAggregateInput)
    _min?: PlanMinAggregateInput;

    @Field(() => PlanMaxAggregateInput, {nullable:true})
    @Type(() => PlanMaxAggregateInput)
    _max?: PlanMaxAggregateInput;
}
