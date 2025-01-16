import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutProfileInput } from './ticket-transaction-create-without-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutProfileInput } from './ticket-transaction-create-or-connect-without-profile.input';
import { TicketTransactionCreateManyProfileInputEnvelope } from './ticket-transaction-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutProfileInput {

    @Field(() => [TicketTransactionCreateWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutProfileInput)
    create?: Array<TicketTransactionCreateWithoutProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutProfileInput>;

    @Field(() => TicketTransactionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;
}
