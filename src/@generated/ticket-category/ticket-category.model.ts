import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TicketTransaction } from '../ticket-transaction/ticket-transaction.model';
import { TicketCategoryCount } from './ticket-category-count.output';

@ObjectType()
export class TicketCategory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [TicketTransaction], {nullable:true})
    ticketTransaction?: Array<TicketTransaction>;

    @Field(() => TicketCategoryCount, {nullable:false})
    _count?: TicketCategoryCount;
}
