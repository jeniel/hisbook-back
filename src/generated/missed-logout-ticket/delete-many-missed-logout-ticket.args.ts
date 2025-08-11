import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMissedLogoutTicketArgs {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
