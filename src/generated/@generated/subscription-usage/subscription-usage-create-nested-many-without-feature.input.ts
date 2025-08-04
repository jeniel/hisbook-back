import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateWithoutFeatureInput } from './subscription-usage-create-without-feature.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageCreateOrConnectWithoutFeatureInput } from './subscription-usage-create-or-connect-without-feature.input';
import { SubscriptionUsageCreateManyFeatureInputEnvelope } from './subscription-usage-create-many-feature-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';

@InputType()
export class SubscriptionUsageCreateNestedManyWithoutFeatureInput {

    @Field(() => [SubscriptionUsageCreateWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateWithoutFeatureInput)
    create?: Array<SubscriptionUsageCreateWithoutFeatureInput>;

    @Field(() => [SubscriptionUsageCreateOrConnectWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateOrConnectWithoutFeatureInput)
    connectOrCreate?: Array<SubscriptionUsageCreateOrConnectWithoutFeatureInput>;

    @Field(() => SubscriptionUsageCreateManyFeatureInputEnvelope, {nullable:true})
    @Type(() => SubscriptionUsageCreateManyFeatureInputEnvelope)
    createMany?: SubscriptionUsageCreateManyFeatureInputEnvelope;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;
}
