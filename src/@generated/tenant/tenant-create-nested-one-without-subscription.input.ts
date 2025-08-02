import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutSubscriptionInput } from './tenant-create-without-subscription.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutSubscriptionInput } from './tenant-create-or-connect-without-subscription.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutSubscriptionInput {

    @Field(() => TenantCreateWithoutSubscriptionInput, {nullable:true})
    @Type(() => TenantCreateWithoutSubscriptionInput)
    create?: TenantCreateWithoutSubscriptionInput;

    @Field(() => TenantCreateOrConnectWithoutSubscriptionInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutSubscriptionInput)
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;
}
