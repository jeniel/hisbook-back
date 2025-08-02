import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateManyPlanInput } from './subscription-create-many-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionCreateManyPlanInputEnvelope {

    @Field(() => [SubscriptionCreateManyPlanInput], {nullable:false})
    @Type(() => SubscriptionCreateManyPlanInput)
    data!: Array<SubscriptionCreateManyPlanInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
