import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundWhereInput } from '../documents-callinbound/documents-callinbound-where.input';
import { Type } from 'class-transformer';
import { documents_callinboundOrderByWithAggregationInput } from '../documents-callinbound/documents-callinbound-order-by-with-aggregation.input';
import { Documents_callinboundScalarFieldEnum } from './documents-callinbound-scalar-field.enum';
import { documents_callinboundScalarWhereWithAggregatesInput } from '../documents-callinbound/documents-callinbound-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydocumentsCallinboundArgs {

    @Field(() => documents_callinboundWhereInput, {nullable:true})
    @Type(() => documents_callinboundWhereInput)
    where?: documents_callinboundWhereInput;

    @Field(() => [documents_callinboundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<documents_callinboundOrderByWithAggregationInput>;

    @Field(() => [Documents_callinboundScalarFieldEnum], {nullable:false})
    by!: Array<`${Documents_callinboundScalarFieldEnum}`>;

    @Field(() => documents_callinboundScalarWhereWithAggregatesInput, {nullable:true})
    having?: documents_callinboundScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
