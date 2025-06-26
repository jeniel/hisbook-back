import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoWhereInput } from '../documents-demo/documents-demo-where.input';
import { Type } from 'class-transformer';
import { documents_demoOrderByWithAggregationInput } from '../documents-demo/documents-demo-order-by-with-aggregation.input';
import { Documents_demoScalarFieldEnum } from './documents-demo-scalar-field.enum';
import { documents_demoScalarWhereWithAggregatesInput } from '../documents-demo/documents-demo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydocumentsDemoArgs {

    @Field(() => documents_demoWhereInput, {nullable:true})
    @Type(() => documents_demoWhereInput)
    where?: documents_demoWhereInput;

    @Field(() => [documents_demoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<documents_demoOrderByWithAggregationInput>;

    @Field(() => [Documents_demoScalarFieldEnum], {nullable:false})
    by!: Array<`${Documents_demoScalarFieldEnum}`>;

    @Field(() => documents_demoScalarWhereWithAggregatesInput, {nullable:true})
    having?: documents_demoScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
