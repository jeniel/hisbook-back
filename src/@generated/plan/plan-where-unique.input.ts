import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanType } from '../prisma/plan-type.enum';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumBillingCycleFilter } from '../prisma/enum-billing-cycle-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlanFeatureListRelationFilter } from '../plan-feature/plan-feature-list-relation-filter.input';
import { SubscriptionListRelationFilter } from '../subscription/subscription-list-relation-filter.input';

@InputType()
export class PlanWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PlanType, {nullable:true})
    name?: `${PlanType}`;

    @Field(() => [PlanWhereInput], {nullable:true})
    @Type(() => PlanWhereInput)
    AND?: Array<PlanWhereInput>;

    @Field(() => [PlanWhereInput], {nullable:true})
    @Type(() => PlanWhereInput)
    OR?: Array<PlanWhereInput>;

    @Field(() => [PlanWhereInput], {nullable:true})
    @Type(() => PlanWhereInput)
    NOT?: Array<PlanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    displayName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => EnumBillingCycleFilter, {nullable:true})
    billingCycle?: EnumBillingCycleFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PlanFeatureListRelationFilter, {nullable:true})
    @Type(() => PlanFeatureListRelationFilter)
    features?: PlanFeatureListRelationFilter;

    @Field(() => SubscriptionListRelationFilter, {nullable:true})
    @Type(() => SubscriptionListRelationFilter)
    subscriptions?: SubscriptionListRelationFilter;
}
