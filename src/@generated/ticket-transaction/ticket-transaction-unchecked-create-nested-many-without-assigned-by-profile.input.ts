import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAssignedByProfileInput } from './ticket-transaction-create-without-assigned-by-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAssignedByProfileInput } from './ticket-transaction-create-or-connect-without-assigned-by-profile.input';
import { TicketTransactionCreateManyAssignedByProfileInputEnvelope } from './ticket-transaction-create-many-assigned-by-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutAssignedByProfileInput {

    @Field(() => [TicketTransactionCreateWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAssignedByProfileInput)
    create?: Array<TicketTransactionCreateWithoutAssignedByProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutAssignedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAssignedByProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutAssignedByProfileInput>;

    @Field(() => TicketTransactionCreateManyAssignedByProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyAssignedByProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyAssignedByProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;
}
