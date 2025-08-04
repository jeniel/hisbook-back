import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { PlanOrderByWithRelationInput } from './plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanCountAggregateInput } from './plan-count-aggregate.input';
import { PlanAvgAggregateInput } from './plan-avg-aggregate.input';
import { PlanSumAggregateInput } from './plan-sum-aggregate.input';
import { PlanMinAggregateInput } from './plan-min-aggregate.input';
import { PlanMaxAggregateInput } from './plan-max-aggregate.input';

@ArgsType()
export class PlanAggregateArgs {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => [PlanOrderByWithRelationInput], {nullable:true})
    @Type(() => PlanOrderByWithRelationInput)
    orderBy?: Array<PlanOrderByWithRelationInput>;

    @Field(() => PlanWhereUniqueInput, {nullable:true})
    @Type(() => PlanWhereUniqueInput)
    cursor?: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

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
