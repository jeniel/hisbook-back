import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubscriptionUsageSubscriptionIdFeatureIdPeriodCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    subscriptionId!: string;

    @Field(() => String, {nullable:false})
    featureId!: string;

    @Field(() => Date, {nullable:false})
    period!: Date | string;
}
