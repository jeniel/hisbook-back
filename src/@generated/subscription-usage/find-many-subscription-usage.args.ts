import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubscriptionUsageWhereInput } from './subscription-usage-where.input';
import { Type } from 'class-transformer';
import { SubscriptionUsageOrderByWithRelationInput } from './subscription-usage-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubscriptionUsageWhereUniqueInput } from './subscription-usage-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubscriptionUsageScalarFieldEnum } from './subscription-usage-scalar-field.enum';

@ArgsType()
export class FindManySubscriptionUsageArgs {

    @Field(() => SubscriptionUsageWhereInput, {nullable:true})
    @Type(() => SubscriptionUsageWhereInput)
    where?: SubscriptionUsageWhereInput;

    @Field(() => [SubscriptionUsageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubscriptionUsageOrderByWithRelationInput>;

    @Field(() => SubscriptionUsageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubscriptionUsageWhereUniqueInput, 'id' | 'subscriptionId_featureId_period'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubscriptionUsageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubscriptionUsageScalarFieldEnum}`>;
}
