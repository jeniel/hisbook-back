import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsWhereInput } from './documents-where.input';
import { Type } from 'class-transformer';
import { documentsOrderByWithAggregationInput } from './documents-order-by-with-aggregation.input';
import { DocumentsScalarFieldEnum } from '../prisma/documents-scalar-field.enum';
import { documentsScalarWhereWithAggregatesInput } from './documents-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class documentsGroupByArgs {

    @Field(() => documentsWhereInput, {nullable:true})
    @Type(() => documentsWhereInput)
    where?: documentsWhereInput;

    @Field(() => [documentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<documentsOrderByWithAggregationInput>;

    @Field(() => [DocumentsScalarFieldEnum], {nullable:false})
    by!: Array<`${DocumentsScalarFieldEnum}`>;

    @Field(() => documentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: documentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
