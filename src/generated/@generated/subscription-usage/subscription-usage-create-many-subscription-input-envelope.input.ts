import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateManySubscriptionInput } from './subscription-usage-create-many-subscription.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionUsageCreateManySubscriptionInputEnvelope {

    @Field(() => [SubscriptionUsageCreateManySubscriptionInput], {nullable:false})
    @Type(() => SubscriptionUsageCreateManySubscriptionInput)
    data!: Array<SubscriptionUsageCreateManySubscriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
