import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordWhereInput } from './keyword-where.input';
import { Type } from 'class-transformer';
import { KeywordOrderByWithAggregationInput } from './keyword-order-by-with-aggregation.input';
import { KeywordScalarFieldEnum } from './keyword-scalar-field.enum';
import { KeywordScalarWhereWithAggregatesInput } from './keyword-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { KeywordCountAggregateInput } from './keyword-count-aggregate.input';
import { KeywordAvgAggregateInput } from './keyword-avg-aggregate.input';
import { KeywordSumAggregateInput } from './keyword-sum-aggregate.input';
import { KeywordMinAggregateInput } from './keyword-min-aggregate.input';
import { KeywordMaxAggregateInput } from './keyword-max-aggregate.input';

@ArgsType()
export class KeywordGroupByArgs {

    @Field(() => KeywordWhereInput, {nullable:true})
    @Type(() => KeywordWhereInput)
    where?: KeywordWhereInput;

    @Field(() => [KeywordOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KeywordOrderByWithAggregationInput>;

    @Field(() => [KeywordScalarFieldEnum], {nullable:false})
    by!: Array<`${KeywordScalarFieldEnum}`>;

    @Field(() => KeywordScalarWhereWithAggregatesInput, {nullable:true})
    having?: KeywordScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => KeywordCountAggregateInput, {nullable:true})
    _count?: KeywordCountAggregateInput;

    @Field(() => KeywordAvgAggregateInput, {nullable:true})
    _avg?: KeywordAvgAggregateInput;

    @Field(() => KeywordSumAggregateInput, {nullable:true})
    _sum?: KeywordSumAggregateInput;

    @Field(() => KeywordMinAggregateInput, {nullable:true})
    _min?: KeywordMinAggregateInput;

    @Field(() => KeywordMaxAggregateInput, {nullable:true})
    _max?: KeywordMaxAggregateInput;
}
