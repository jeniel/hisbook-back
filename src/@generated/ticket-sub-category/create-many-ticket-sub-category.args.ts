import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryCreateManyInput } from './ticket-sub-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTicketSubCategoryArgs {

    @Field(() => [TicketSubCategoryCreateManyInput], {nullable:false})
    @Type(() => TicketSubCategoryCreateManyInput)
    data!: Array<TicketSubCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
