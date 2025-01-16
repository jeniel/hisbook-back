import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketSubCategoryWhereUniqueInput } from './ticket-sub-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTicketSubCategoryOrThrowArgs {

    @Field(() => TicketSubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketSubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketSubCategoryWhereUniqueInput, 'id'>;
}
