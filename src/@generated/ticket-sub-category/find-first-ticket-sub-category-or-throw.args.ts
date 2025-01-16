import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';
import { Type } from 'class-transformer';
import { TicketSubCategoryOrderByWithRelationInput } from './ticket-sub-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketSubCategoryWhereUniqueInput } from './ticket-sub-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketSubCategoryScalarFieldEnum } from './ticket-sub-category-scalar-field.enum';

@ArgsType()
export class FindFirstTicketSubCategoryOrThrowArgs {

    @Field(() => TicketSubCategoryWhereInput, {nullable:true})
    @Type(() => TicketSubCategoryWhereInput)
    where?: TicketSubCategoryWhereInput;

    @Field(() => [TicketSubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketSubCategoryOrderByWithRelationInput>;

    @Field(() => TicketSubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketSubCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TicketSubCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TicketSubCategoryScalarFieldEnum>;
}
