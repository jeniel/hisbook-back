import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutCreatedByProfileInput } from './ticket-transaction-create-without-created-by-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutCreatedByProfileInput } from './ticket-transaction-create-or-connect-without-created-by-profile.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutCreatedByProfileInput } from './ticket-transaction-upsert-with-where-unique-without-created-by-profile.input';
import { TicketTransactionCreateManyCreatedByProfileInputEnvelope } from './ticket-transaction-create-many-created-by-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutCreatedByProfileInput } from './ticket-transaction-update-with-where-unique-without-created-by-profile.input';
import { TicketTransactionUpdateManyWithWhereWithoutCreatedByProfileInput } from './ticket-transaction-update-many-with-where-without-created-by-profile.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUncheckedUpdateManyWithoutCreatedByProfileNestedInput {

    @Field(() => [TicketTransactionCreateWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutCreatedByProfileInput)
    create?: Array<TicketTransactionCreateWithoutCreatedByProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutCreatedByProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutCreatedByProfileInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutCreatedByProfileInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutCreatedByProfileInput>;

    @Field(() => TicketTransactionCreateManyCreatedByProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyCreatedByProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyCreatedByProfileInputEnvelope;

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

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutCreatedByProfileInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutCreatedByProfileInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutCreatedByProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutCreatedByProfileInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutCreatedByProfileInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
