import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';
import { Type } from 'class-transformer';
import { FacebookPagePostOrderByWithRelationInput } from './facebook-page-post-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacebookPagePostCountAggregateInput } from './facebook-page-post-count-aggregate.input';
import { FacebookPagePostMinAggregateInput } from './facebook-page-post-min-aggregate.input';
import { FacebookPagePostMaxAggregateInput } from './facebook-page-post-max-aggregate.input';

@ArgsType()
export class FacebookPagePostAggregateArgs {

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    @Type(() => FacebookPagePostWhereInput)
    where?: FacebookPagePostWhereInput;

    @Field(() => [FacebookPagePostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacebookPagePostOrderByWithRelationInput>;

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacebookPagePostCountAggregateInput, {nullable:true})
    _count?: FacebookPagePostCountAggregateInput;

    @Field(() => FacebookPagePostMinAggregateInput, {nullable:true})
    _min?: FacebookPagePostMinAggregateInput;

    @Field(() => FacebookPagePostMaxAggregateInput, {nullable:true})
    _max?: FacebookPagePostMaxAggregateInput;
}
