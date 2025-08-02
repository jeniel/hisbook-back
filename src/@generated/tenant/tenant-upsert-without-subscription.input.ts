import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutSubscriptionInput } from './tenant-update-without-subscription.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutSubscriptionInput } from './tenant-create-without-subscription.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutSubscriptionInput {

    @Field(() => TenantUpdateWithoutSubscriptionInput, {nullable:false})
    @Type(() => TenantUpdateWithoutSubscriptionInput)
    update!: TenantUpdateWithoutSubscriptionInput;

    @Field(() => TenantCreateWithoutSubscriptionInput, {nullable:false})
    @Type(() => TenantCreateWithoutSubscriptionInput)
    create!: TenantCreateWithoutSubscriptionInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
