import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCreateWithoutSubscriptionsInput } from './plan-create-without-subscriptions.input';
import { Type } from 'class-transformer';
import { PlanCreateOrConnectWithoutSubscriptionsInput } from './plan-create-or-connect-without-subscriptions.input';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';

@InputType()
export class PlanCreateNestedOneWithoutSubscriptionsInput {

    @Field(() => PlanCreateWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanCreateWithoutSubscriptionsInput)
    create?: PlanCreateWithoutSubscriptionsInput;

    @Field(() => PlanCreateOrConnectWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanCreateOrConnectWithoutSubscriptionsInput)
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput;

    @Field(() => PlanWhereUniqueInput, {nullable:true})
    @Type(() => PlanWhereUniqueInput)
    connect?: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;
}
