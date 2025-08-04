import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageCreateManyInput } from './subscription-usage-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubscriptionUsageArgs {

    @Field(() => [SubscriptionUsageCreateManyInput], {nullable:false})
    @Type(() => SubscriptionUsageCreateManyInput)
    data!: Array<SubscriptionUsageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
