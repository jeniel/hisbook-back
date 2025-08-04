import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionWhereInput } from './subscription-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUpdateWithoutTenantInput } from './subscription-update-without-tenant.input';

@InputType()
export class SubscriptionUpdateToOneWithWhereWithoutTenantInput {

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;

    @Field(() => SubscriptionUpdateWithoutTenantInput, {nullable:false})
    @Type(() => SubscriptionUpdateWithoutTenantInput)
    data!: SubscriptionUpdateWithoutTenantInput;
}
