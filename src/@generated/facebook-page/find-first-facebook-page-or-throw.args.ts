import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageWhereInput } from './facebook-page-where.input';
import { Type } from 'class-transformer';
import { FacebookPageOrderByWithRelationInput } from './facebook-page-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacebookPageWhereUniqueInput } from './facebook-page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacebookPageScalarFieldEnum } from './facebook-page-scalar-field.enum';

@ArgsType()
export class FindFirstFacebookPageOrThrowArgs {

    @Field(() => FacebookPageWhereInput, {nullable:true})
    @Type(() => FacebookPageWhereInput)
    where?: FacebookPageWhereInput;

    @Field(() => [FacebookPageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacebookPageOrderByWithRelationInput>;

    @Field(() => FacebookPageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacebookPageWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacebookPageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FacebookPageScalarFieldEnum}`>;
}
