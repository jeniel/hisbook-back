import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateWithoutCreatedByInput } from './missed-logout-ticket-create-without-created-by.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateOrConnectWithoutCreatedByInput } from './missed-logout-ticket-create-or-connect-without-created-by.input';
import { MissedLogoutTicketCreateManyCreatedByInputEnvelope } from './missed-logout-ticket-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';

@InputType()
export class MissedLogoutTicketUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [MissedLogoutTicketCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketCreateWithoutCreatedByInput)
    create?: Array<MissedLogoutTicketCreateWithoutCreatedByInput>;

    @Field(() => [MissedLogoutTicketCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<MissedLogoutTicketCreateOrConnectWithoutCreatedByInput>;

    @Field(() => MissedLogoutTicketCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => MissedLogoutTicketCreateManyCreatedByInputEnvelope)
    createMany?: MissedLogoutTicketCreateManyCreatedByInputEnvelope;

    @Field(() => [MissedLogoutTicketWhereUniqueInput], {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>>;
}
