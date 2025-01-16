import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class TicketSubCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TicketSubCategoryWhereInput], {nullable:true})
    AND?: Array<TicketSubCategoryWhereInput>;

    @Field(() => [TicketSubCategoryWhereInput], {nullable:true})
    OR?: Array<TicketSubCategoryWhereInput>;

    @Field(() => [TicketSubCategoryWhereInput], {nullable:true})
    NOT?: Array<TicketSubCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
