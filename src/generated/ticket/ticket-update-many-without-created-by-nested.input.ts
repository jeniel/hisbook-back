import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutCreatedByInput } from './ticket-create-without-created-by.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutCreatedByInput } from './ticket-create-or-connect-without-created-by.input';
import { TicketUpsertWithWhereUniqueWithoutCreatedByInput } from './ticket-upsert-with-where-unique-without-created-by.input';
import { TicketCreateManyCreatedByInputEnvelope } from './ticket-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutCreatedByInput } from './ticket-update-with-where-unique-without-created-by.input';
import { TicketUpdateManyWithWhereWithoutCreatedByInput } from './ticket-update-many-with-where-without-created-by.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [TicketCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketCreateWithoutCreatedByInput)
    create?: Array<TicketCreateWithoutCreatedByInput>;

    @Field(() => [TicketCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => TicketCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyCreatedByInputEnvelope)
    createMany?: TicketCreateManyCreatedByInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
