import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageCreateInput } from './subscription-usage-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubscriptionUsageArgs {

    @Field(() => SubscriptionUsageCreateInput, {nullable:false})
    @Type(() => SubscriptionUsageCreateInput)
    data!: SubscriptionUsageCreateInput;
}
