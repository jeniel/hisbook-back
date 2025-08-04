import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionWhereInput } from './subscription-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubscriptionArgs {

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
