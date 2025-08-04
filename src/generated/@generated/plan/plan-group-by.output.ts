import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanType } from '../prisma/plan-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BillingCycle } from '../prisma/billing-cycle.enum';
import { PlanCountAggregate } from './plan-count-aggregate.output';
import { PlanAvgAggregate } from './plan-avg-aggregate.output';
import { PlanSumAggregate } from './plan-sum-aggregate.output';
import { PlanMinAggregate } from './plan-min-aggregate.output';
import { PlanMaxAggregate } from './plan-max-aggregate.output';

@ObjectType()
export class PlanGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => PlanType, {nullable:false})
    name!: `${PlanType}`;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => BillingCycle, {nullable:false})
    billingCycle!: `${BillingCycle}`;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PlanCountAggregate, {nullable:true})
    _count?: PlanCountAggregate;

    @Field(() => PlanAvgAggregate, {nullable:true})
    _avg?: PlanAvgAggregate;

    @Field(() => PlanSumAggregate, {nullable:true})
    _sum?: PlanSumAggregate;

    @Field(() => PlanMinAggregate, {nullable:true})
    _min?: PlanMinAggregate;

    @Field(() => PlanMaxAggregate, {nullable:true})
    _max?: PlanMaxAggregate;
}
