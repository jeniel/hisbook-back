import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUpdateManyMutationInput } from './subscription-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubscriptionWhereInput } from './subscription-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubscriptionArgs {

    @Field(() => SubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => SubscriptionUpdateManyMutationInput)
    data!: SubscriptionUpdateManyMutationInput;

    @Field(() => SubscriptionWhereInput, {nullable:true})
    @Type(() => SubscriptionWhereInput)
    where?: SubscriptionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
