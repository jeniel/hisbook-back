import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCategoryCreateInput } from './ticket-category-create.input';
import { TicketCategoryUpdateInput } from './ticket-category-update.input';

@ArgsType()
export class UpsertOneTicketCategoryArgs {

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;

    @Field(() => TicketCategoryCreateInput, {nullable:false})
    @Type(() => TicketCategoryCreateInput)
    create!: TicketCategoryCreateInput;

    @Field(() => TicketCategoryUpdateInput, {nullable:false})
    @Type(() => TicketCategoryUpdateInput)
    update!: TicketCategoryUpdateInput;
}
