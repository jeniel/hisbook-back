import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryCreateInput } from './ticket-sub-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTicketSubCategoryArgs {

    @Field(() => TicketSubCategoryCreateInput, {nullable:false})
    @Type(() => TicketSubCategoryCreateInput)
    data!: TicketSubCategoryCreateInput;
}
