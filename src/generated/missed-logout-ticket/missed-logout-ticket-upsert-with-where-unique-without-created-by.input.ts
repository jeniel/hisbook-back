import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketUpdateWithoutCreatedByInput } from './missed-logout-ticket-update-without-created-by.input';
import { MissedLogoutTicketCreateWithoutCreatedByInput } from './missed-logout-ticket-create-without-created-by.input';

@InputType()
export class MissedLogoutTicketUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:false})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    where!: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

    @Field(() => MissedLogoutTicketUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => MissedLogoutTicketUpdateWithoutCreatedByInput)
    update!: MissedLogoutTicketUpdateWithoutCreatedByInput;

    @Field(() => MissedLogoutTicketCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => MissedLogoutTicketCreateWithoutCreatedByInput)
    create!: MissedLogoutTicketCreateWithoutCreatedByInput;
}
