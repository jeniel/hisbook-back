import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PlanType } from '../prisma/plan-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { BillingCycle } from '../prisma/billing-cycle.enum';
import { PlanFeature } from '../plan-feature/plan-feature.model';
import { Subscription } from '../subscription/subscription.model';
import { PlanCount } from './plan-count.output';

@ObjectType()
export class Plan {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => PlanType, {nullable:false})
    name!: `${PlanType}`;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {defaultValue:'USD',nullable:false})
    currency!: string;

    @Field(() => BillingCycle, {defaultValue:'MONTHLY',nullable:false})
    billingCycle!: `${BillingCycle}`;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [PlanFeature], {nullable:true})
    features?: Array<PlanFeature>;

    @Field(() => [Subscription], {nullable:true})
    subscriptions?: Array<Subscription>;

    @Field(() => PlanCount, {nullable:false})
    _count?: PlanCount;
}
