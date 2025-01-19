import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAgentTransactionInput } from './ticket-transaction-create-without-agent-transaction.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAgentTransactionInput } from './ticket-transaction-create-or-connect-without-agent-transaction.input';
import { TicketTransactionUpsertWithoutAgentTransactionInput } from './ticket-transaction-upsert-without-agent-transaction.input';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateToOneWithWhereWithoutAgentTransactionInput } from './ticket-transaction-update-to-one-with-where-without-agent-transaction.input';

@InputType()
export class TicketTransactionUpdateOneWithoutAgentTransactionNestedInput {

    @Field(() => TicketTransactionCreateWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAgentTransactionInput)
    create?: TicketTransactionCreateWithoutAgentTransactionInput;

    @Field(() => TicketTransactionCreateOrConnectWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAgentTransactionInput)
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutAgentTransactionInput;

    @Field(() => TicketTransactionUpsertWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionUpsertWithoutAgentTransactionInput)
    upsert?: TicketTransactionUpsertWithoutAgentTransactionInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    disconnect?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    delete?: TicketTransactionWhereInput;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => TicketTransactionUpdateToOneWithWhereWithoutAgentTransactionInput, {nullable:true})
    @Type(() => TicketTransactionUpdateToOneWithWhereWithoutAgentTransactionInput)
    update?: TicketTransactionUpdateToOneWithWhereWithoutAgentTransactionInput;
}
