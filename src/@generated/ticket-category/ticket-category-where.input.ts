import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TicketTransactionListRelationFilter } from '../ticket-transaction/ticket-transaction-list-relation-filter.input';

@InputType()
export class TicketCategoryWhereInput {

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    AND?: Array<TicketCategoryWhereInput>;

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    OR?: Array<TicketCategoryWhereInput>;

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    NOT?: Array<TicketCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => TicketTransactionListRelationFilter, {nullable:true})
    ticketTransaction?: TicketTransactionListRelationFilter;
}
