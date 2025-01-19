import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TicketTransaction } from '../ticket-transaction/ticket-transaction.model';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class AgentTransaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    ticketTransactionId!: string | null;

    @Field(() => String, {nullable:true})
    profileId!: string | null;

    @Field(() => TicketTransaction, {nullable:true})
    ticket?: TicketTransaction | null;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;
}
