import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanFeatureAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    limit?: true;
}
