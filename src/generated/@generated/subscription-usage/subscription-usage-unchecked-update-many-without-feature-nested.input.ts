import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateWithoutFeatureInput } from './subscription-usage-create-without-feature.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageCreateOrConnectWithoutFeatureInput } from './subscription-usage-create-or-connect-without-feature.input';
import { SubscriptionUsageUpsertWithWhereUniqueWithoutFeatureInput } from './subscription-usage-upsert-with-where-unique-without-feature.input';
import { SubscriptionUsageCreateManyFeatureInputEnvelope } from './subscription-usage-create-many-feature-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { SubscriptionUsageUpdateWithWhereUniqueWithoutFeatureInput } from './subscription-usage-update-with-where-unique-without-feature.input';
import { SubscriptionUsageUpdateManyWithWhereWithoutFeatureInput } from './subscription-usage-update-many-with-where-without-feature.input';
import { SubscriptionUsageScalarWhereInput } from './subscription-usage-scalar-where.input';

@InputType()
export class SubscriptionUsageUncheckedUpdateManyWithoutFeatureNestedInput {

    @Field(() => [SubscriptionUsageCreateWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateWithoutFeatureInput)
    create?: Array<SubscriptionUsageCreateWithoutFeatureInput>;

    @Field(() => [SubscriptionUsageCreateOrConnectWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateOrConnectWithoutFeatureInput)
    connectOrCreate?: Array<SubscriptionUsageCreateOrConnectWithoutFeatureInput>;

    @Field(() => [SubscriptionUsageUpsertWithWhereUniqueWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageUpsertWithWhereUniqueWithoutFeatureInput)
    upsert?: Array<SubscriptionUsageUpsertWithWhereUniqueWithoutFeatureInput>;

    @Field(() => SubscriptionUsageCreateManyFeatureInputEnvelope, {nullable:true})
    @Type(() => SubscriptionUsageCreateManyFeatureInputEnvelope)
    createMany?: SubscriptionUsageCreateManyFeatureInputEnvelope;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;

    @Field(() => [SubscriptionUsageWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionUsageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>>;

    @Field(() => [SubscriptionUsageUpdateWithWhereUniqueWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageUpdateWithWhereUniqueWithoutFeatureInput)
    update?: Array<SubscriptionUsageUpdateWithWhereUniqueWithoutFeatureInput>;

    @Field(() => [SubscriptionUsageUpdateManyWithWhereWithoutFeatureInput], {nullable:true})
    @Type(() => SubscriptionUsageUpdateManyWithWhereWithoutFeatureInput)
    updateMany?: Array<SubscriptionUsageUpdateManyWithWhereWithoutFeatureInput>;

    @Field(() => [SubscriptionUsageScalarWhereInput], {nullable:true})
    @Type(() => SubscriptionUsageScalarWhereInput)
    deleteMany?: Array<SubscriptionUsageScalarWhereInput>;
}
