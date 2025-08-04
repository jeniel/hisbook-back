import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { Type } from 'class-transformer';
import { PlanUpdateWithoutSubscriptionsInput } from './plan-update-without-subscriptions.input';

@InputType()
export class PlanUpdateToOneWithWhereWithoutSubscriptionsInput {

    @Field(() => PlanWhereInput, {nullable:true})
    @Type(() => PlanWhereInput)
    where?: PlanWhereInput;

    @Field(() => PlanUpdateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => PlanUpdateWithoutSubscriptionsInput)
    data!: PlanUpdateWithoutSubscriptionsInput;
}
