import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAssignedByProfileInput } from './ticket-transaction-create-without-assigned-by-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAssignedByProfileInput } from './ticket-transaction-create-or-connect-without-assigned-by-profile.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutAssignedByProfileInput } from './ticket-transaction-upsert-with-where-unique-without-assigned-by-profile.input';
import { TicketTransactionCreateManyAssignedByProfileInputEnvelope } from './ticket-transaction-create-many-assigned-by-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutAssignedByProfileInput } from './ticket-transaction-update-with-where-unique-without-assigned-by-profile.input';
import { TicketTransactionUpdateManyWithWhereWithoutAssignedByProfileInput } from './ticket-transaction-update-many-with-where-without-assigned-by-profile.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUncheckedUpdateManyWithoutAssignedByProfileNestedInput {

    @Field(() => [TicketTransactionCreateWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAssignedByProfileInput)
    create?: Array<TicketTransactionCreateWithoutAssignedByProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAssignedByProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutAssignedByProfileInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutAssignedByProfileInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutAssignedByProfileInput>;

    @Field(() => TicketTransactionCreateManyAssignedByProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyAssignedByProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyAssignedByProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutAssignedByProfileInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutAssignedByProfileInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutAssignedByProfileInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutAssignedByProfileInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
