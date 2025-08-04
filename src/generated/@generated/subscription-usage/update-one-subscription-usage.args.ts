import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageUpdateInput } from './subscription-usage-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';

@ArgsType()
export class UpdateOneSubscriptionUsageArgs {

    @Field(() => SubscriptionUsageUpdateInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateInput)
    data!: SubscriptionUsageUpdateInput;

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;
}
