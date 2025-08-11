import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';

@InputType()
export class MissedLogoutTicketListRelationFilter {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    every?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    some?: MissedLogoutTicketWhereInput;

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    none?: MissedLogoutTicketWhereInput;
}
