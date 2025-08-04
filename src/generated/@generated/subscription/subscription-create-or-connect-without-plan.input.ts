import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutPlanInput } from './subscription-create-without-plan.input';

@InputType()
export class SubscriptionCreateOrConnectWithoutPlanInput {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>;

    @Field(() => SubscriptionCreateWithoutPlanInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutPlanInput)
    create!: SubscriptionCreateWithoutPlanInput;
}
