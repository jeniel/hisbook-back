import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Type } from 'class-transformer';
import { TicketCategoryOrderByWithRelationInput } from './ticket-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketCategoryScalarFieldEnum } from './ticket-category-scalar-field.enum';

@ArgsType()
export class FindManyTicketCategoryArgs {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;

    @Field(() => [TicketCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketCategoryOrderByWithRelationInput>;

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TicketCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TicketCategoryScalarFieldEnum>;
}
