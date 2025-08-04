import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanCount {

    @Field(() => Int, {nullable:false})
    features?: number;

    @Field(() => Int, {nullable:false})
    subscriptions?: number;
}
