import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAssignedToProfileInput } from './ticket-transaction-create-without-assigned-to-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAssignedToProfileInput } from './ticket-transaction-create-or-connect-without-assigned-to-profile.input';
import { TicketTransactionCreateManyAssignedToProfileInputEnvelope } from './ticket-transaction-create-many-assigned-to-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';

@InputType()
export class TicketTransactionUncheckedCreateNestedManyWithoutAssignedToProfileInput {

    @Field(() => [TicketTransactionCreateWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAssignedToProfileInput)
    create?: Array<TicketTransactionCreateWithoutAssignedToProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAssignedToProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutAssignedToProfileInput>;

    @Field(() => TicketTransactionCreateManyAssignedToProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyAssignedToProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyAssignedToProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;
}
