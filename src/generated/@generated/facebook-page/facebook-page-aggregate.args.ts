import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Type } from 'class-transformer';
import { FacebookPageOrderByWithRelationInput } from './facebook-page-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacebookPageCountAggregateInput } from './facebook-page-count-aggregate.input';
import { FacebookPageAvgAggregateInput } from './facebook-page-avg-aggregate.input';
import { FacebookPageSumAggregateInput } from './facebook-page-sum-aggregate.input';
import { FacebookPageMinAggregateInput } from './facebook-page-min-aggregate.input';
import { FacebookPageMaxAggregateInput } from './facebook-page-max-aggregate.input';

@ArgsType()
export class FacebookPageAggregateArgs {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => [FacebookPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacebookPageOrderByWithRelationInput>;

    @Field(() => FacebookPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacebookPageCountAggregateInput, {nullable:true})
    _count?: FacebookPageCountAggregateInput;

    @Field(() => FacebookPageAvgAggregateInput, {nullable:true})
    _avg?: FacebookPageAvgAggregateInput;

    @Field(() => FacebookPageSumAggregateInput, {nullable:true})
    _sum?: FacebookPageSumAggregateInput;

    @Field(() => FacebookPageMinAggregateInput, {nullable:true})
    _min?: FacebookPageMinAggregateInput;

    @Field(() => FacebookPageMaxAggregateInput, {nullable:true})
    _max?: FacebookPageMaxAggregateInput;
}
