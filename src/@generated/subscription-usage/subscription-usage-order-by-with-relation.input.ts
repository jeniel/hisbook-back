import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SubscriptionOrderByWithRelationInput } from '../subscription/subscription-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { FeatureOrderByWithRelationInput } from '../feature/feature-order-by-with-relation.input';

@InputType()
export class SubscriptionUsageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    featureId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    usage?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    period?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SubscriptionOrderByWithRelationInput, {nullable:true})
    @Type(() => SubscriptionOrderByWithRelationInput)
    subscription?: SubscriptionOrderByWithRelationInput;

    @Field(() => FeatureOrderByWithRelationInput, {nullable:true})
    feature?: FeatureOrderByWithRelationInput;
}
