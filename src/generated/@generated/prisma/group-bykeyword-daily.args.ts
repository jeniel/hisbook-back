import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyWhereInput } from '../keyword-daily/keyword-daily-where.input';
import { Type } from 'class-transformer';
import { keyword_dailyOrderByWithAggregationInput } from '../keyword-daily/keyword-daily-order-by-with-aggregation.input';
import { Keyword_dailyScalarFieldEnum } from './keyword-daily-scalar-field.enum';
import { keyword_dailyScalarWhereWithAggregatesInput } from '../keyword-daily/keyword-daily-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBykeywordDailyArgs {

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    @Type(() => keyword_dailyWhereInput)
    where?: keyword_dailyWhereInput;

    @Field(() => [keyword_dailyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<keyword_dailyOrderByWithAggregationInput>;

    @Field(() => [Keyword_dailyScalarFieldEnum], {nullable:false})
    by!: Array<`${Keyword_dailyScalarFieldEnum}`>;

    @Field(() => keyword_dailyScalarWhereWithAggregatesInput, {nullable:true})
    having?: keyword_dailyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
