import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutAssignedToProfileInput } from './ticket-transaction-create-without-assigned-to-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutAssignedToProfileInput } from './ticket-transaction-create-or-connect-without-assigned-to-profile.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutAssignedToProfileInput } from './ticket-transaction-upsert-with-where-unique-without-assigned-to-profile.input';
import { TicketTransactionCreateManyAssignedToProfileInputEnvelope } from './ticket-transaction-create-many-assigned-to-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutAssignedToProfileInput } from './ticket-transaction-update-with-where-unique-without-assigned-to-profile.input';
import { TicketTransactionUpdateManyWithWhereWithoutAssignedToProfileInput } from './ticket-transaction-update-many-with-where-without-assigned-to-profile.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUpdateManyWithoutAssignedToProfileNestedInput {

    @Field(() => [TicketTransactionCreateWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutAssignedToProfileInput)
    create?: Array<TicketTransactionCreateWithoutAssignedToProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutAssignedToProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutAssignedToProfileInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutAssignedToProfileInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutAssignedToProfileInput>;

    @Field(() => TicketTransactionCreateManyAssignedToProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyAssignedToProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyAssignedToProfileInputEnvelope;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionWhereUniqueInput], {nullable:true})
    @Type(() => TicketTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutAssignedToProfileInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutAssignedToProfileInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutAssignedToProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutAssignedToProfileInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutAssignedToProfileInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
