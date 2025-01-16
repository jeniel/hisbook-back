import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTicketCategoryArgs {

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;
}
