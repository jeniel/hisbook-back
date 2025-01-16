import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class TicketSubCategoryScalarWhereWithAggregatesInput {

    @Field(() => [TicketSubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TicketSubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [TicketSubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TicketSubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [TicketSubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TicketSubCategoryScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
