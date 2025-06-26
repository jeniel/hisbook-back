import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerWhereInput } from '../documents-becker/documents-becker-where.input';
import { Type } from 'class-transformer';
import { documents_beckerOrderByWithAggregationInput } from '../documents-becker/documents-becker-order-by-with-aggregation.input';
import { Documents_beckerScalarFieldEnum } from './documents-becker-scalar-field.enum';
import { documents_beckerScalarWhereWithAggregatesInput } from '../documents-becker/documents-becker-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydocumentsBeckerArgs {

    @Field(() => documents_beckerWhereInput, {nullable:true})
    @Type(() => documents_beckerWhereInput)
    where?: documents_beckerWhereInput;

    @Field(() => [documents_beckerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<documents_beckerOrderByWithAggregationInput>;

    @Field(() => [Documents_beckerScalarFieldEnum], {nullable:false})
    by!: Array<`${Documents_beckerScalarFieldEnum}`>;

    @Field(() => documents_beckerScalarWhereWithAggregatesInput, {nullable:true})
    having?: documents_beckerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
