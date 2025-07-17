import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsWhereInput } from './keywords-where.input';
import { Type } from 'class-transformer';
import { keywordsOrderByWithRelationInput } from './keywords-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KeywordsScalarFieldEnum } from '../prisma/keywords-scalar-field.enum';

@ArgsType()
export class FindFirstkeywordsArgs {

    @Field(() => keywordsWhereInput, {nullable:true})
    @Type(() => keywordsWhereInput)
    where?: keywordsWhereInput;

    @Field(() => [keywordsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<keywordsOrderByWithRelationInput>;

    @Field(() => keywordsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KeywordsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${KeywordsScalarFieldEnum}`>;
}
