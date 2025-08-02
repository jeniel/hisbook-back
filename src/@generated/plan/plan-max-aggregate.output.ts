import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanType } from '../prisma/plan-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BillingCycle } from '../prisma/billing-cycle.enum';

@ObjectType()
export class PlanMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PlanType, {nullable:true})
    name?: `${PlanType}`;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => BillingCycle, {nullable:true})
    billingCycle?: `${BillingCycle}`;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
