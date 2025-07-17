import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsWhereInput } from './keywords-where.input';
import { Type } from 'class-transformer';
import { keywordsOrderByWithAggregationInput } from './keywords-order-by-with-aggregation.input';
import { KeywordsScalarFieldEnum } from '../prisma/keywords-scalar-field.enum';
import { keywordsScalarWhereWithAggregatesInput } from './keywords-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class keywordsGroupByArgs {

    @Field(() => keywordsWhereInput, {nullable:true})
    @Type(() => keywordsWhereInput)
    where?: keywordsWhereInput;

    @Field(() => [keywordsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<keywordsOrderByWithAggregationInput>;

    @Field(() => [KeywordsScalarFieldEnum], {nullable:false})
    by!: Array<`${KeywordsScalarFieldEnum}`>;

    @Field(() => keywordsScalarWhereWithAggregatesInput, {nullable:true})
    having?: keywordsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
