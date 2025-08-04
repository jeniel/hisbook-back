import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostWhereInput } from './facebook-page-post-where.input';
import { Type } from 'class-transformer';
import { FacebookPagePostOrderByWithRelationInput } from './facebook-page-post-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacebookPagePostScalarFieldEnum } from './facebook-page-post-scalar-field.enum';

@ArgsType()
export class FindFirstFacebookPagePostArgs {

    @Field(() => FacebookPagePostWhereInput, {nullable:true})
    @Type(() => FacebookPagePostWhereInput)
    where?: FacebookPagePostWhereInput;

    @Field(() => [FacebookPagePostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacebookPagePostOrderByWithRelationInput>;

    @Field(() => FacebookPagePostWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacebookPagePostScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FacebookPagePostScalarFieldEnum}`>;
}
