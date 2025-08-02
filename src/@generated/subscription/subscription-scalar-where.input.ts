import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSubscriptionStatusFilter } from '../prisma/enum-subscription-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBillingCycleFilter } from '../prisma/enum-billing-cycle-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class SubscriptionScalarWhereInput {

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    AND?: Array<SubscriptionScalarWhereInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    OR?: Array<SubscriptionScalarWhereInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<SubscriptionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    planId?: StringFilter;

    @Field(() => EnumSubscriptionStatusFilter, {nullable:true})
    status?: EnumSubscriptionStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => EnumBillingCycleFilter, {nullable:true})
    billingCycle?: EnumBillingCycleFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastBillingDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    nextBillingDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    cancelledAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancellationReason?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
