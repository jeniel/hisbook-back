import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketUpdateInput } from './missed-logout-ticket-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';

@ArgsType()
export class UpdateOneMissedLogoutTicketArgs {

    @Field(() => MissedLogoutTicketUpdateInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateInput)
    data!: MissedLogoutTicketUpdateInput;

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:false})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    where!: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;
}
