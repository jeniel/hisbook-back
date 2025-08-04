import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutSubscriptionInput } from './tenant-create-without-subscription.input';

@InputType()
export class TenantCreateOrConnectWithoutSubscriptionInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantCreateWithoutSubscriptionInput, {nullable:false})
    @Type(() => TenantCreateWithoutSubscriptionInput)
    create!: TenantCreateWithoutSubscriptionInput;
}
