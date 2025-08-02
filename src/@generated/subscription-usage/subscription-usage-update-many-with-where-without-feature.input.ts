import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionUsageScalarWhereInput } from './subscription-usage-scalar-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageUpdateManyMutationInput } from './subscription-usage-update-many-mutation.input';

@InputType()
export class SubscriptionUsageUpdateManyWithWhereWithoutFeatureInput {

    @Field(() => SubscriptionUsageScalarWhereInput, {nullable:false})
    @Type(() => SubscriptionUsageScalarWhereInput)
    where!: SubscriptionUsageScalarWhereInput;

    @Field(() => SubscriptionUsageUpdateManyMutationInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateManyMutationInput)
    data!: SubscriptionUsageUpdateManyMutationInput;
}
