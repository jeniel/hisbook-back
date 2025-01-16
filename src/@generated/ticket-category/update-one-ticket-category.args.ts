import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryUpdateInput } from './ticket-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';

@ArgsType()
export class UpdateOneTicketCategoryArgs {

    @Field(() => TicketCategoryUpdateInput, {nullable:false})
    @Type(() => TicketCategoryUpdateInput)
    data!: TicketCategoryUpdateInput;

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;
}
