import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionWhereInput } from './subscription-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUpdateWithoutUsageInput } from './subscription-update-without-usage.input';

@InputType()
export class SubscriptionUpdateToOneWithWhereWithoutUsageInput {

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;

    @Field(() => SubscriptionUpdateWithoutUsageInput, {nullable:false})
    @Type(() => SubscriptionUpdateWithoutUsageInput)
    data!: SubscriptionUpdateWithoutUsageInput;
}
