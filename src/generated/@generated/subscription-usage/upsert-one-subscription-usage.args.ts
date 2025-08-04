import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageCreateInput } from './subscription-usage-create.input';
import { SubscriptionUsageUpdateInput } from './subscription-usage-update.input';

@ArgsType()
export class UpsertOneSubscriptionUsageArgs {

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;

    @Field(() => SubscriptionUsageCreateInput, {nullable:false})
    @Type(() => SubscriptionUsageCreateInput)
    create!: SubscriptionUsageCreateInput;

    @Field(() => SubscriptionUsageUpdateInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateInput)
    update!: SubscriptionUsageUpdateInput;
}
