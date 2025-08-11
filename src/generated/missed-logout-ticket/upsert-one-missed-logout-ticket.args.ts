import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateInput } from './missed-logout-ticket-create.input';
import { MissedLogoutTicketUpdateInput } from './missed-logout-ticket-update.input';

@ArgsType()
export class UpsertOneMissedLogoutTicketArgs {

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:false})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    where!: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

    @Field(() => MissedLogoutTicketCreateInput, {nullable:false})
    @Type(() => MissedLogoutTicketCreateInput)
    create!: MissedLogoutTicketCreateInput;

    @Field(() => MissedLogoutTicketUpdateInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateInput)
    update!: MissedLogoutTicketUpdateInput;
}
