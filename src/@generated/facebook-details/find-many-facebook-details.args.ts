import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsWhereInput } from './facebook-details-where.input';
import { Type } from 'class-transformer';
import { FacebookDetailsOrderByWithRelationInput } from './facebook-details-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FacebookDetailsWhereUniqueInput } from './facebook-details-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FacebookDetailsScalarFieldEnum } from './facebook-details-scalar-field.enum';

@ArgsType()
export class FindManyFacebookDetailsArgs {

    @Field(() => FacebookDetailsWhereInput, {nullable:true})
    @Type(() => FacebookDetailsWhereInput)
    where?: FacebookDetailsWhereInput;

    @Field(() => [FacebookDetailsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FacebookDetailsOrderByWithRelationInput>;

    @Field(() => FacebookDetailsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FacebookDetailsWhereUniqueInput, 'id' | 'fbId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FacebookDetailsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FacebookDetailsScalarFieldEnum}`>;
}
