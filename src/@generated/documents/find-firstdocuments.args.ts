import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsWhereInput } from './documents-where.input';
import { Type } from 'class-transformer';
import { documentsOrderByWithRelationInput } from './documents-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DocumentsScalarFieldEnum } from '../prisma/documents-scalar-field.enum';

@ArgsType()
export class FindFirstdocumentsArgs {

    @Field(() => documentsWhereInput, {nullable:true})
    @Type(() => documentsWhereInput)
    where?: documentsWhereInput;

    @Field(() => [documentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<documentsOrderByWithRelationInput>;

    @Field(() => documentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DocumentsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DocumentsScalarFieldEnum}`>;
}
