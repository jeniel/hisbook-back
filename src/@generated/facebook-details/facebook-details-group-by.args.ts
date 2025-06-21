import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsWhereInput } from './facebook-details-where.input';
import { Type } from 'class-transformer';
import { FacebookDetailsOrderByWithAggregationInput } from './facebook-details-order-by-with-aggregation.input';
import { FacebookDetailsScalarFieldEnum } from './facebook-details-scalar-field.enum';
import { FacebookDetailsScalarWhereWithAggregatesInput } from './facebook-details-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacebookDetailsCountAggregateInput } from './facebook-details-count-aggregate.input';
import { FacebookDetailsAvgAggregateInput } from './facebook-details-avg-aggregate.input';
import { FacebookDetailsSumAggregateInput } from './facebook-details-sum-aggregate.input';
import { FacebookDetailsMinAggregateInput } from './facebook-details-min-aggregate.input';
import { FacebookDetailsMaxAggregateInput } from './facebook-details-max-aggregate.input';

@ArgsType()
export class FacebookDetailsGroupByArgs {

    @Field(() => FacebookDetailsWhereInput, {nullable:true})
    @Type(() => FacebookDetailsWhereInput)
    where?: FacebookDetailsWhereInput;

    @Field(() => [FacebookDetailsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacebookDetailsOrderByWithAggregationInput>;

    @Field(() => [FacebookDetailsScalarFieldEnum], {nullable:false})
    by!: Array<`${FacebookDetailsScalarFieldEnum}`>;

    @Field(() => FacebookDetailsScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacebookDetailsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacebookDetailsCountAggregateInput, {nullable:true})
    _count?: FacebookDetailsCountAggregateInput;

    @Field(() => FacebookDetailsAvgAggregateInput, {nullable:true})
    _avg?: FacebookDetailsAvgAggregateInput;

    @Field(() => FacebookDetailsSumAggregateInput, {nullable:true})
    _sum?: FacebookDetailsSumAggregateInput;

    @Field(() => FacebookDetailsMinAggregateInput, {nullable:true})
    _min?: FacebookDetailsMinAggregateInput;

    @Field(() => FacebookDetailsMaxAggregateInput, {nullable:true})
    _max?: FacebookDetailsMaxAggregateInput;
}
