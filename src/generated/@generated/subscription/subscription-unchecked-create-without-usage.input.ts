import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionStatus } from '../prisma/subscription-status.enum';
import { BillingCycle } from '../prisma/billing-cycle.enum';

@InputType()
export class SubscriptionUncheckedCreateWithoutUsageInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => String, {nullable:false})
    planId!: string;

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
}
