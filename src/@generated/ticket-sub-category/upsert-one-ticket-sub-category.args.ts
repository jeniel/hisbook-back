import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketSubCategoryWhereUniqueInput } from './ticket-sub-category-where-unique.input';
import { Type } from 'class-transformer';
import { TicketSubCategoryCreateInput } from './ticket-sub-category-create.input';
import { TicketSubCategoryUpdateInput } from './ticket-sub-category-update.input';

@ArgsType()
export class UpsertOneTicketSubCategoryArgs {

    @Field(() => TicketSubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketSubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketSubCategoryWhereUniqueInput, 'id'>;

    @Field(() => TicketSubCategoryCreateInput, {nullable:false})
    @Type(() => TicketSubCategoryCreateInput)
    create!: TicketSubCategoryCreateInput;

    @Field(() => TicketSubCategoryUpdateInput, {nullable:false})
    @Type(() => TicketSubCategoryUpdateInput)
    update!: TicketSubCategoryUpdateInput;
}
