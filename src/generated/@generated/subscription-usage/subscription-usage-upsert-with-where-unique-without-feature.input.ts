import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageUpdateWithoutFeatureInput } from './subscription-usage-update-without-feature.input';
import { SubscriptionUsageCreateWithoutFeatureInput } from './subscription-usage-create-without-feature.input';

@InputType()
export class SubscriptionUsageUpsertWithWhereUniqueWithoutFeatureInput {

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;

    @Field(() => SubscriptionUsageUpdateWithoutFeatureInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateWithoutFeatureInput)
    update!: SubscriptionUsageUpdateWithoutFeatureInput;

    @Field(() => SubscriptionUsageCreateWithoutFeatureInput, {nullable:false})
    @Type(() => SubscriptionUsageCreateWithoutFeatureInput)
    create!: SubscriptionUsageCreateWithoutFeatureInput;
}
