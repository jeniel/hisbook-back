import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutTenantInput } from './subscription-create-without-tenant.input';

@InputType()
export class SubscriptionCreateOrConnectWithoutTenantInput {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;

    @Field(() => SubscriptionCreateWithoutTenantInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutTenantInput)
    create!: SubscriptionCreateWithoutTenantInput;
}
