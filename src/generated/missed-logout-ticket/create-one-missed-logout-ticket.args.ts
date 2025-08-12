import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateInput } from './missed-logout-ticket-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMissedLogoutTicketArgs {

    @Field(() => MissedLogoutTicketCreateInput, {nullable:true})
    @Type(() => MissedLogoutTicketCreateInput)
    data?: MissedLogoutTicketCreateInput;
}
