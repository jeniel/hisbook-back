import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutUsageInput } from './subscription-create-without-usage.input';

@InputType()
export class SubscriptionCreateOrConnectWithoutUsageInput {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;

    @Field(() => SubscriptionCreateWithoutUsageInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutUsageInput)
    create!: SubscriptionCreateWithoutUsageInput;
}
