import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryCreateManyInput } from './ticket-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTicketCategoryArgs {

    @Field(() => [TicketCategoryCreateManyInput], {nullable:false})
    @Type(() => TicketCategoryCreateManyInput)
    data!: Array<TicketCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
