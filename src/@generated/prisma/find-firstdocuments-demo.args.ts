import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoWhereInput } from '../documents-demo/documents-demo-where.input';
import { Type } from 'class-transformer';
import { documents_demoOrderByWithRelationInput } from '../documents-demo/documents-demo-order-by-with-relation.input';
import { documents_demoWhereUniqueInput } from '../documents-demo/documents-demo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Documents_demoScalarFieldEnum } from './documents-demo-scalar-field.enum';

@ArgsType()
export class FindFirstdocumentsDemoArgs {

    @Field(() => documents_demoWhereInput, {nullable:true})
    @Type(() => documents_demoWhereInput)
    where?: documents_demoWhereInput;

    @Field(() => [documents_demoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<documents_demoOrderByWithRelationInput>;

    @Field(() => documents_demoWhereUniqueInput, {nullable:true})
    cursor?: documents_demoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Documents_demoScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Documents_demoScalarFieldEnum}`>;
}
