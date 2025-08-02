import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutTenantInput } from './subscription-create-without-tenant.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutTenantInput } from './subscription-create-or-connect-without-tenant.input';
import { SubscriptionUpsertWithoutTenantInput } from './subscription-upsert-without-tenant.input';
import { SubscriptionWhereInput } from './subscription-where.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { SubscriptionUpdateToOneWithWhereWithoutTenantInput } from './subscription-update-to-one-with-where-without-tenant.input';

@InputType()
export class SubscriptionUpdateOneWithoutTenantNestedInput {

    @Field(() => SubscriptionCreateWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionCreateWithoutTenantInput)
    create?: SubscriptionCreateWithoutTenantInput;

    @Field(() => SubscriptionCreateOrConnectWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutTenantInput)
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput;

    @Field(() => SubscriptionUpsertWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionUpsertWithoutTenantInput)
    upsert?: SubscriptionUpsertWithoutTenantInput;

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    disconnect?: SubscriptionWhereInput;

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    delete?: SubscriptionWhereInput;

    @Field(() => SubscriptionWhereUniqueInput, {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;

    @Field(() => SubscriptionUpdateToOneWithWhereWithoutTenantInput, {nullable:true})
    @Type(() => SubscriptionUpdateToOneWithWhereWithoutTenantInput)
    update?: SubscriptionUpdateToOneWithWhereWithoutTenantInput;
}
