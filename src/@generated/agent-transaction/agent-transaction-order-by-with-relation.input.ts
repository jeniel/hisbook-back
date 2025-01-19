import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TicketTransactionOrderByWithRelationInput } from '../ticket-transaction/ticket-transaction-order-by-with-relation.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class AgentTransactionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ticketTransactionId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    profileId?: SortOrderInput;

    @Field(() => TicketTransactionOrderByWithRelationInput, {nullable:true})
    ticket?: TicketTransactionOrderByWithRelationInput;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;
}
