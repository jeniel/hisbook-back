import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SubscriptionUsageScalarWhereWithAggregatesInput {

    @Field(() => [SubscriptionUsageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubscriptionUsageScalarWhereWithAggregatesInput>;

    @Field(() => [SubscriptionUsageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubscriptionUsageScalarWhereWithAggregatesInput>;

    @Field(() => [SubscriptionUsageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubscriptionUsageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subscriptionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    featureId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    usage?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    period?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
