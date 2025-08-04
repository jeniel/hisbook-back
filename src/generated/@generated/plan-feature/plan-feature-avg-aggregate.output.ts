import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PlanFeatureAvgAggregate {

    @Field(() => Float, {nullable:true})
    limit?: number;
}
