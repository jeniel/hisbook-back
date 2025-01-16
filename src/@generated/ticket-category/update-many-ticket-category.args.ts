import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryUpdateManyMutationInput } from './ticket-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TicketCategoryWhereInput } from './ticket-category-where.input';

@ArgsType()
export class UpdateManyTicketCategoryArgs {

    @Field(() => TicketCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketCategoryUpdateManyMutationInput)
    data!: TicketCategoryUpdateManyMutationInput;

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;
}
