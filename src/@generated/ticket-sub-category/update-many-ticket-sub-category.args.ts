import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryUpdateManyMutationInput } from './ticket-sub-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';

@ArgsType()
export class UpdateManyTicketSubCategoryArgs {

    @Field(() => TicketSubCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketSubCategoryUpdateManyMutationInput)
    data!: TicketSubCategoryUpdateManyMutationInput;

    @Field(() => TicketSubCategoryWhereInput, {nullable:true})
    @Type(() => TicketSubCategoryWhereInput)
    where?: TicketSubCategoryWhereInput;
}
