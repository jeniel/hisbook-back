import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateWithoutSubscriptionInput } from './subscription-usage-create-without-subscription.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageCreateOrConnectWithoutSubscriptionInput } from './subscription-usage-create-or-connect-without-subscription.input';
import { SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput } from './subscription-usage-upsert-with-where-unique-without-subscription.input';
import { SubscriptionUsageCreateManySubscriptionInputEnvelope } from './subscription-usage-create-many-subscription-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput } from './subscription-usage-update-with-where-unique-without-subscription.input';
import { SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput } from './subscription-usage-update-many-with-where-without-subscription.input';
import { SubscriptionUsageScalarWhereInput } from './subscription-usage-scalar-where.input';

@InputType()
export class SubscriptionUsageUpdateManyWithoutSubscriptionNestedInput {

    @Field(() => [SubscriptionUsageCreateWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateWithoutSubscriptionInput)
    create?: Array<SubscriptionUsageCreateWithoutSubscriptionInput>;

    @Field(() => [SubscriptionUsageCreateOrConnectWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: Array<SubscriptionUsageCreateOrConnectWithoutSubscriptionInput>;

    @Field(() => [SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput)
    upsert?: Array<SubscriptionUsageUpsertWithWhereUniqueWithoutSubscriptionInput>;

    @Field(() => SubscriptionUsageCreateManySubscriptionInputEnvelope, {nullable:true})
    @Type(() => SubscriptionUsageCreateManySubscriptionInputEnvelope)
    createMany?: SubscriptionUsageCreateManySubscriptionInputEnvelope;

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

    @Field(() => [SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput)
    update?: Array<SubscriptionUsageUpdateWithWhereUniqueWithoutSubscriptionInput>;

    @Field(() => [SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput], {nullable:true})
    @Type(() => SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput)
    updateMany?: Array<SubscriptionUsageUpdateManyWithWhereWithoutSubscriptionInput>;

    @Field(() => [SubscriptionUsageScalarWhereInput], {nullable:true})
    @Type(() => SubscriptionUsageScalarWhereInput)
    deleteMany?: Array<SubscriptionUsageScalarWhereInput>;
}
