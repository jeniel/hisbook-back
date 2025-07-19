import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordWhereInput } from './keyword-where.input';
import { Type } from 'class-transformer';
import { KeywordOrderByWithRelationInput } from './keyword-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KeywordScalarFieldEnum } from './keyword-scalar-field.enum';

@ArgsType()
export class FindManyKeywordArgs {

    @Field(() => KeywordWhereInput, {nullable:true})
    @Type(() => KeywordWhereInput)
    where?: KeywordWhereInput;

    @Field(() => [KeywordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KeywordOrderByWithRelationInput>;

    @Field(() => KeywordWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KeywordScalarFieldEnum], {nullable:true})
    distinct?: Array<`${KeywordScalarFieldEnum}`>;
}
