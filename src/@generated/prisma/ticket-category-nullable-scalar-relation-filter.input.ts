import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from '../ticket-category/ticket-category-where.input';

@InputType()
export class TicketCategoryNullableScalarRelationFilter {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    is?: TicketCategoryWhereInput;

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    isNot?: TicketCategoryWhereInput;
}
