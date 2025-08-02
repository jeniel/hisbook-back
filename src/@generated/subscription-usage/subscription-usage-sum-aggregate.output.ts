import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubscriptionUsageSumAggregate {

    @Field(() => Int, {nullable:true})
    usage?: number;
}
