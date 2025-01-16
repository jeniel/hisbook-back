import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class TicketCategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    AND?: Array<TicketCategoryWhereInput>;

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    OR?: Array<TicketCategoryWhereInput>;

    @Field(() => [TicketCategoryWhereInput], {nullable:true})
    NOT?: Array<TicketCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
