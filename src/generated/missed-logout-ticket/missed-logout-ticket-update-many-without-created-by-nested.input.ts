import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissedLogoutTicketCreateWithoutCreatedByInput } from './missed-logout-ticket-create-without-created-by.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketCreateOrConnectWithoutCreatedByInput } from './missed-logout-ticket-create-or-connect-without-created-by.input';
import { MissedLogoutTicketUpsertWithWhereUniqueWithoutCreatedByInput } from './missed-logout-ticket-upsert-with-where-unique-without-created-by.input';
import { MissedLogoutTicketCreateManyCreatedByInputEnvelope } from './missed-logout-ticket-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { MissedLogoutTicketUpdateWithWhereUniqueWithoutCreatedByInput } from './missed-logout-ticket-update-with-where-unique-without-created-by.input';
import { MissedLogoutTicketUpdateManyWithWhereWithoutCreatedByInput } from './missed-logout-ticket-update-many-with-where-without-created-by.input';
import { MissedLogoutTicketScalarWhereInput } from './missed-logout-ticket-scalar-where.input';

@InputType()
export class MissedLogoutTicketUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [MissedLogoutTicketCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketCreateWithoutCreatedByInput)
    create?: Array<MissedLogoutTicketCreateWithoutCreatedByInput>;

    @Field(() => [MissedLogoutTicketCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<MissedLogoutTicketCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [MissedLogoutTicketUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<MissedLogoutTicketUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => MissedLogoutTicketCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => MissedLogoutTicketCreateManyCreatedByInputEnvelope)
    createMany?: MissedLogoutTicketCreateManyCreatedByInputEnvelope;

    @Field(() => [MissedLogoutTicketWhereUniqueInput], {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>>;

    @Field(() => [MissedLogoutTicketWhereUniqueInput], {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>>;

    @Field(() => [MissedLogoutTicketWhereUniqueInput], {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>>;

    @Field(() => [MissedLogoutTicketWhereUniqueInput], {nullable:true})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>>;

    @Field(() => [MissedLogoutTicketUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<MissedLogoutTicketUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [MissedLogoutTicketUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => MissedLogoutTicketUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<MissedLogoutTicketUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [MissedLogoutTicketScalarWhereInput], {nullable:true})
    @Type(() => MissedLogoutTicketScalarWhereInput)
    deleteMany?: Array<MissedLogoutTicketScalarWhereInput>;
}
