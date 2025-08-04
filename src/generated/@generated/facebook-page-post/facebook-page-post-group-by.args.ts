import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';
import { Type } from 'class-transformer';
import { FacebookPagePostOrderByWithAggregationInput } from './facebook-page-post-order-by-with-aggregation.input';
import { FacebookPagePostScalarFieldEnum } from './facebook-page-post-scalar-field.enum';
import { FacebookPagePostScalarWhereWithAggregatesInput } from './facebook-page-post-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacebookPagePostCountAggregateInput } from './facebook-page-post-count-aggregate.input';
import { FacebookPagePostMinAggregateInput } from './facebook-page-post-min-aggregate.input';
import { FacebookPagePostMaxAggregateInput } from './facebook-page-post-max-aggregate.input';

@ArgsType()
export class FacebookPagePostGroupByArgs {

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    @Type(() => FacebookPagePostWhereInput)
    where?: FacebookPagePostWhereInput;

    @Field(() => [FacebookPagePostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacebookPagePostOrderByWithAggregationInput>;

    @Field(() => [FacebookPagePostScalarFieldEnum], {nullable:false})
    by!: Array<`${FacebookPagePostScalarFieldEnum}`>;

    @Field(() => FacebookPagePostScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacebookPagePostScalarWhereWithAggregatesInput;

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
