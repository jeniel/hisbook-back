import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Type } from 'class-transformer';
import { PlanCreateWithoutSubscriptionsInput } from './plan-create-without-subscriptions.input';

@InputType()
export class PlanCreateOrConnectWithoutSubscriptionsInput {

    @Field(() => PlanWhereUniqueInput, {nullable:false})
    @Type(() => PlanWhereUniqueInput)
    where!: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanCreateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => PlanCreateWithoutSubscriptionsInput)
    create!: PlanCreateWithoutSubscriptionsInput;
}
