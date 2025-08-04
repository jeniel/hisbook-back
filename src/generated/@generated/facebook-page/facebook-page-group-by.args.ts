import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Type } from 'class-transformer';
import { FacebookPageOrderByWithAggregationInput } from './facebook-page-order-by-with-aggregation.input';
import { FacebookPageScalarFieldEnum } from './facebook-page-scalar-field.enum';
import { FacebookPageScalarWhereWithAggregatesInput } from './facebook-page-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacebookPageCountAggregateInput } from './facebook-page-count-aggregate.input';
import { FacebookPageAvgAggregateInput } from './facebook-page-avg-aggregate.input';
import { FacebookPageSumAggregateInput } from './facebook-page-sum-aggregate.input';
import { FacebookPageMinAggregateInput } from './facebook-page-min-aggregate.input';
import { FacebookPageMaxAggregateInput } from './facebook-page-max-aggregate.input';

@ArgsType()
export class FacebookPageGroupByArgs {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => [FacebookPageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacebookPageOrderByWithAggregationInput>;

    @Field(() => [FacebookPageScalarFieldEnum], {nullable:false})
    by!: Array<`${FacebookPageScalarFieldEnum}`>;

    @Field(() => FacebookPageScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacebookPageScalarWhereWithAggregatesInput;

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
