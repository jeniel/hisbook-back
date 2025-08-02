import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SubscriptionUsageScalarWhereInput {

    @Field(() => [SubscriptionUsageScalarWhereInput], {nullable:true})
    AND?: Array<SubscriptionUsageScalarWhereInput>;

    @Field(() => [SubscriptionUsageScalarWhereInput], {nullable:true})
    OR?: Array<SubscriptionUsageScalarWhereInput>;

    @Field(() => [SubscriptionUsageScalarWhereInput], {nullable:true})
    NOT?: Array<SubscriptionUsageScalarWhereInput>;

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
}
