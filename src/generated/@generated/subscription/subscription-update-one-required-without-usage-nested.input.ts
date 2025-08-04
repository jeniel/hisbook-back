import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutUsageInput } from './subscription-create-without-usage.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutUsageInput } from './subscription-create-or-connect-without-usage.input';
import { SubscriptionUpsertWithoutUsageInput } from './subscription-upsert-without-usage.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { SubscriptionUpdateToOneWithWhereWithoutUsageInput } from './subscription-update-to-one-with-where-without-usage.input';

@InputType()
export class SubscriptionUpdateOneRequiredWithoutUsageNestedInput {

    @Field(() => SubscriptionCreateWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionCreateWithoutUsageInput)
    create?: SubscriptionCreateWithoutUsageInput;

    @Field(() => SubscriptionCreateOrConnectWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutUsageInput)
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsageInput;

    @Field(() => SubscriptionUpsertWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionUpsertWithoutUsageInput)
    upsert?: SubscriptionUpsertWithoutUsageInput;

    @Field(() => SubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;

    @Field(() => SubscriptionUpdateToOneWithWhereWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionUpdateToOneWithWhereWithoutUsageInput)
    update?: SubscriptionUpdateToOneWithWhereWithoutUsageInput;
}
