import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutUsageInput } from './subscription-create-without-usage.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutUsageInput } from './subscription-create-or-connect-without-usage.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';

@InputType()
export class SubscriptionCreateNestedOneWithoutUsageInput {

    @Field(() => SubscriptionCreateWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionCreateWithoutUsageInput)
    create?: SubscriptionCreateWithoutUsageInput;

    @Field(() => SubscriptionCreateOrConnectWithoutUsageInput, {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutUsageInput)
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUsageInput;

    @Field(() => SubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;
}
