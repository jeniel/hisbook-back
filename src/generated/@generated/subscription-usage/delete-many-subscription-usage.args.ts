import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubscriptionUsageArgs {

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    @Type(() => SubscriptionUsageWhereInput)
    where?: SubscriptionUsageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
