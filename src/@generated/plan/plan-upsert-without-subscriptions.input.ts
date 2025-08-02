import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanUpdateWithoutSubscriptionsInput } from './plan-update-without-subscriptions.input';
import { Type } from 'class-transformer';
import { PlanCreateWithoutSubscriptionsInput } from './plan-create-without-subscriptions.input';
import { PlanWhereInput } from './plan-where.input';

@InputType()
export class PlanUpsertWithoutSubscriptionsInput {

    @Field(() => PlanUpdateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => PlanUpdateWithoutSubscriptionsInput)
    update!: PlanUpdateWithoutSubscriptionsInput;

    @Field(() => PlanCreateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => PlanCreateWithoutSubscriptionsInput)
    create!: PlanCreateWithoutSubscriptionsInput;

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;
}
