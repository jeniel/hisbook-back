import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTicketSubCategoryArgs {

    @Field(() => TicketSubCategoryWhereInput, {nullable:true})
    @Type(() => TicketSubCategoryWhereInput)
    where?: TicketSubCategoryWhereInput;
}
