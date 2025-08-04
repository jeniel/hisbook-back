import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUpdateWithoutTenantInput } from './subscription-update-without-tenant.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutTenantInput } from './subscription-create-without-tenant.input';
import { SubscriptionWhereInput } from './subscription-where.input';

@InputType()
export class SubscriptionUpsertWithoutTenantInput {

    @Field(() => SubscriptionUpdateWithoutTenantInput, {nullable:false})
    @Type(() => SubscriptionUpdateWithoutTenantInput)
    update!: SubscriptionUpdateWithoutTenantInput;

    @Field(() => SubscriptionCreateWithoutTenantInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutTenantInput)
    create!: SubscriptionCreateWithoutTenantInput;

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;
}
