import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSubscriptionUsageArgs {

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;
}
