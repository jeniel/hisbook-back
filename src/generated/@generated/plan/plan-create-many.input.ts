import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanType } from '../prisma/plan-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { BillingCycle } from '../prisma/billing-cycle.enum';

@InputType()
export class PlanCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PlanType, {nullable:false})
    name!: `${PlanType}`;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

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
