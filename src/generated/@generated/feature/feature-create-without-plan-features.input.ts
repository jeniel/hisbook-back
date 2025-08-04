import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageCreateNestedManyWithoutFeatureInput } from '../subscription-usage/subscription-usage-create-nested-many-without-feature.input';

@InputType()
export class FeatureCreateWithoutPlanFeaturesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SubscriptionUsageCreateNestedManyWithoutFeatureInput, {nullable:true})
    usage?: SubscriptionUsageCreateNestedManyWithoutFeatureInput;
}
