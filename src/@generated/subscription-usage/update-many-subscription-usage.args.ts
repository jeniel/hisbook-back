import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageUpdateManyMutationInput } from './subscription-usage-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubscriptionUsageArgs {

    @Field(() => SubscriptionUsageUpdateManyMutationInput, {nullable:false})
    @Type(() => SubscriptionUsageUpdateManyMutationInput)
    data!: SubscriptionUsageUpdateManyMutationInput;

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    @Type(() => SubscriptionUsageWhereInput)
    where?: SubscriptionUsageWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
