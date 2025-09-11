import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutCreatedByInput } from './ticket-create-without-created-by.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutCreatedByInput } from './ticket-create-or-connect-without-created-by.input';
import { TicketCreateManyCreatedByInputEnvelope } from './ticket-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [TicketCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketCreateWithoutCreatedByInput)
    create?: Array<TicketCreateWithoutCreatedByInput>;

    @Field(() => [TicketCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutCreatedByInput>;

    @Field(() => TicketCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyCreatedByInputEnvelope)
    createMany?: TicketCreateManyCreatedByInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;
}
