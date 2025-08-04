import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutTenantInput } from './subscription-create-without-tenant.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutTenantInput } from './subscription-create-or-connect-without-tenant.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';

@InputType()
export class SubscriptionUncheckedCreateNestedOneWithoutTenantInput {

    @Field(() => SubscriptionCreateWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionCreateWithoutTenantInput)
    create?: SubscriptionCreateWithoutTenantInput;

    @Field(() => SubscriptionCreateOrConnectWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutTenantInput)
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput;

    @Field(() => SubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;
}
