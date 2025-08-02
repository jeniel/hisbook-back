import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateInput } from './subscription-create.input';
import { SubscriptionUpdateInput } from './subscription-update.input';

@ArgsType()
export class UpsertOneSubscriptionArgs {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>;

    @Field(() => SubscriptionCreateInput, {nullable:false})
    @Type(() => SubscriptionCreateInput)
    create!: SubscriptionCreateInput;

    @Field(() => SubscriptionUpdateInput, {nullable:false})
    @Type(() => SubscriptionUpdateInput)
    update!: SubscriptionUpdateInput;
}
