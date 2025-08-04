import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateWithoutSubscriptionInput } from './subscription-usage-create-without-subscription.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageCreateOrConnectWithoutSubscriptionInput } from './subscription-usage-create-or-connect-without-subscription.input';
import { SubscriptionUsageCreateManySubscriptionInputEnvelope } from './subscription-usage-create-many-subscription-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';

@InputType()
export class SubscriptionUsageUncheckedCreateNestedManyWithoutSubscriptionInput {

    @Field(() => [SubscriptionUsageCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateWithoutSubscriptionInput)
    create?: Array<SubscriptionUsageCreateWithoutSubscriptionInput>;

    @Field(() => [SubscriptionUsageCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<SubscriptionUsageCreateOrConnectWithoutSubscriptionInput>;

    @Field(() => SubscriptionUsageCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => SubscriptionUsageCreateManySubscriptionInputEnvelope)
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;
}
