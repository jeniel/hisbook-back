import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryCreateInput } from './ticket-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTicketCategoryArgs {

    @Field(() => TicketCategoryCreateInput, {nullable:false})
    @Type(() => TicketCategoryCreateInput)
    data!: TicketCategoryCreateInput;
}
