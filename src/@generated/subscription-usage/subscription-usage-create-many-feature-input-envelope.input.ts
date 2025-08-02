import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateManyFeatureInput } from './subscription-usage-create-many-feature.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionUsageCreateManyFeatureInputEnvelope {

    @Field(() => [SubscriptionUsageCreateManyFeatureInput], {nullable:false})
    @Type(() => SubscriptionUsageCreateManyFeatureInput)
    data!: Array<SubscriptionUsageCreateManyFeatureInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
