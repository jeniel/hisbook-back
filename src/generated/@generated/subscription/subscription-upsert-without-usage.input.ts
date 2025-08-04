import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUpdateWithoutUsageInput } from './subscription-update-without-usage.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutUsageInput } from './subscription-create-without-usage.input';
import { SubscriptionWhereInput } from './subscription-where.input';

@InputType()
export class SubscriptionUpsertWithoutUsageInput {

    @Field(() => SubscriptionUpdateWithoutUsageInput, {nullable:false})
    @Type(() => SubscriptionUpdateWithoutUsageInput)
    update!: SubscriptionUpdateWithoutUsageInput;

    @Field(() => SubscriptionCreateWithoutUsageInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutUsageInput)
    create!: SubscriptionCreateWithoutUsageInput;

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;
}
