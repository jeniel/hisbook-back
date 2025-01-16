import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTicketCategoryArgs {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;
}
