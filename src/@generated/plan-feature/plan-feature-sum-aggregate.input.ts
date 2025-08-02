import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanFeatureSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    limit?: true;
}
