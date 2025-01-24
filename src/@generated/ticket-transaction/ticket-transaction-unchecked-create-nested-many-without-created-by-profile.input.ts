import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutCreatedByProfileInput } from './ticket-transaction-create-without-created-by-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutCreatedByProfileInput } from './ticket-transaction-create-or-connect-without-created-by-profile.input';
import { TicketTransactionCreateManyCreatedByProfileInputEnvelope } from './ticket-transaction-create-many-created-by-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutCreatedByProfileInput {

    @Field(() => [TicketTransactionCreateWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutCreatedByProfileInput)
    create?: Array<TicketTransactionCreateWithoutCreatedByProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutCreatedByProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutCreatedByProfileInput>;

    @Field(() => TicketTransactionCreateManyCreatedByProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyCreatedByProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyCreatedByProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id' | 'ticketNumber'>>;
}
