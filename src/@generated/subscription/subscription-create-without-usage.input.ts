import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from '../prisma/subscription-status.enum';
import { BillingCycle } from '../prisma/billing-cycle.enum';
import { TenantCreateNestedOneWithoutSubscriptionInput } from '../tenant/tenant-create-nested-one-without-subscription.input';
import { PlanCreateNestedOneWithoutSubscriptionsInput } from '../plan/plan-create-nested-one-without-subscriptions.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionCreateWithoutUsageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SubscriptionStatus, {nullable:true})
    status?: `${SubscriptionStatus}`;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => BillingCycle, {nullable:true})
    billingCycle?: `${BillingCycle}`;

    @Field(() => Date, {nullable:true})
    lastBillingDate?: Date | string;

    @Field(() => Date, {nullable:true})
    nextBillingDate?: Date | string;

    @Field(() => Date, {nullable:true})
    cancelledAt?: Date | string;

    @Field(() => String, {nullable:true})
    cancellationReason?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TenantCreateNestedOneWithoutSubscriptionInput, {nullable:false})
    tenant!: TenantCreateNestedOneWithoutSubscriptionInput;

    @Field(() => PlanCreateNestedOneWithoutSubscriptionsInput, {nullable:false})
    @Type(() => PlanCreateNestedOneWithoutSubscriptionsInput)
    plan!: PlanCreateNestedOneWithoutSubscriptionsInput;
}
