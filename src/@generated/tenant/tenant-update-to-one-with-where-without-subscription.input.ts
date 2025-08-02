import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutSubscriptionInput } from './tenant-update-without-subscription.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutSubscriptionInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutSubscriptionInput, {nullable:false})
    @Type(() => TenantUpdateWithoutSubscriptionInput)
    data!: TenantUpdateWithoutSubscriptionInput;
}
