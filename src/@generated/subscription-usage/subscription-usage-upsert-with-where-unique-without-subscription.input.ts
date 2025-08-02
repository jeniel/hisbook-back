import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageUpdateWithoutSubscriptionInput } from './subscription-usage-update-without-subscription.input';
import { SubscriptionUsageCreateWithoutSubscriptionInput } from './subscription-usage-create-without-subscription.input';

@InputType()
export class SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput {

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;

    @Field(() => SubscriptionUsageUpdateWithoutSubscriptionInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateWithoutSubscriptionInput)
    update!: SubscriptionUsageUpdateWithoutSubscriptionInput;

    @Field(() => SubscriptionUsageCreateWithoutSubscriptionInput, {nullable:false})
    @Type(() => SubscriptionUsageCreateWithoutSubscriptionInput)
    create!: SubscriptionUsageCreateWithoutSubscriptionInput;
}
