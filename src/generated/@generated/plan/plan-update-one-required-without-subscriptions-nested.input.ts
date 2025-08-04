import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCreateWithoutSubscriptionsInput } from './plan-create-without-subscriptions.input';
import { Type } from 'class-transformer';
import { PlanCreateOrConnectWithoutSubscriptionsInput } from './plan-create-or-connect-without-subscriptions.input';
import { PlanUpsertWithoutSubscriptionsInput } from './plan-upsert-without-subscriptions.input';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { PlanUpdateToOneWithWhereWithoutSubscriptionsInput } from './plan-update-to-one-with-where-without-subscriptions.input';

@InputType()
export class PlanUpdateOneRequiredWithoutSubscriptionsNestedInput {

    @Field(() => PlanCreateWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanCreateWithoutSubscriptionsInput)
    create?: PlanCreateWithoutSubscriptionsInput;

    @Field(() => PlanCreateOrConnectWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanCreateOrConnectWithoutSubscriptionsInput)
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput;

    @Field(() => PlanUpsertWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanUpsertWithoutSubscriptionsInput)
    upsert?: PlanUpsertWithoutSubscriptionsInput;

    @Field(() => PlanWhereUniqueInput, {nullable:true})
    @Type(() => PlanWhereUniqueInput)
    connect?: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanUpdateToOneWithWhereWithoutSubscriptionsInput, {nullable:true})
    @Type(() => PlanUpdateToOneWithWhereWithoutSubscriptionsInput)
    update?: PlanUpdateToOneWithWhereWithoutSubscriptionsInput;
}
