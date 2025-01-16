import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class TicketCategoryScalarWhereWithAggregatesInput {

    @Field(() => [TicketCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TicketCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [TicketCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TicketCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [TicketCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TicketCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
