import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TicketTransaction } from '../ticket-transaction/ticket-transaction.model';
import { Profile } from '../profile/profile.model';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    ticketId!: string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => TicketTransaction, {nullable:false})
    ticket?: TicketTransaction;

    @Field(() => Profile, {nullable:false})
    profile?: Profile;
}
