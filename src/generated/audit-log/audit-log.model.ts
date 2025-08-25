import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { MissedLogoutTicket } from '../missed-logout-ticket/missed-logout-ticket.model';

@ObjectType()
export class AuditLog {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    action!: string | null;

    @Field(() => Date, {nullable:false})
    timestamp!: Date;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:true})
    ticketId!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => MissedLogoutTicket, {nullable:true})
    ticket?: MissedLogoutTicket | null;
}
