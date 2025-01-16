import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryUpdateInput } from './ticket-sub-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TicketSubCategoryWhereUniqueInput } from './ticket-sub-category-where-unique.input';

@ArgsType()
export class UpdateOneTicketSubCategoryArgs {

    @Field(() => TicketSubCategoryUpdateInput, {nullable:false})
    @Type(() => TicketSubCategoryUpdateInput)
    data!: TicketSubCategoryUpdateInput;

    @Field(() => TicketSubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => TicketSubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<TicketSubCategoryWhereUniqueInput, 'id'>;
}
