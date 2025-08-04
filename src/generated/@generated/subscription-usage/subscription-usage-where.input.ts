import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SubscriptionScalarRelationFilter } from '../subscription/subscription-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { FeatureScalarRelationFilter } from '../feature/feature-scalar-relation-filter.input';

@InputType()
export class SubscriptionUsageWhereInput {

    @Field(() => [SubscriptionUsageWhereInput], {nullable:true})
    AND?: Array<SubscriptionUsageWhereInput>;

    @Field(() => [SubscriptionUsageWhereInput], {nullable:true})
    OR?: Array<SubscriptionUsageWhereInput>;

    @Field(() => [SubscriptionUsageWhereInput], {nullable:true})
    NOT?: Array<SubscriptionUsageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subscriptionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    featureId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    usage?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    period?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SubscriptionScalarRelationFilter, {nullable:true})
    @Type(() => SubscriptionScalarRelationFilter)
    subscription?: SubscriptionScalarRelationFilter;

    @Field(() => FeatureScalarRelationFilter, {nullable:true})
    feature?: FeatureScalarRelationFilter;
}
