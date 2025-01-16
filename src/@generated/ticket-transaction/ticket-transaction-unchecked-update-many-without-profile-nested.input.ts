import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketTransactionCreateWithoutProfileInput } from './ticket-transaction-create-without-profile.input';
import { Type } from 'class-transformer';
import { TicketTransactionCreateOrConnectWithoutProfileInput } from './ticket-transaction-create-or-connect-without-profile.input';
import { TicketTransactionUpsertWithWhereUniqueWithoutProfileInput } from './ticket-transaction-upsert-with-where-unique-without-profile.input';
import { TicketTransactionCreateManyProfileInputEnvelope } from './ticket-transaction-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { TicketTransactionUpdateWithWhereUniqueWithoutProfileInput } from './ticket-transaction-update-with-where-unique-without-profile.input';
import { TicketTransactionUpdateManyWithWhereWithoutProfileInput } from './ticket-transaction-update-many-with-where-without-profile.input';
import { TicketTransactionScalarWhereInput } from './ticket-transaction-scalar-where.input';

@InputType()
export class TicketTransactionUncheckedUpdateManyWithoutProfileNestedInput {

    @Field(() => [TicketTransactionCreateWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateWithoutProfileInput)
    create?: Array<TicketTransactionCreateWithoutProfileInput>;

    @Field(() => [TicketTransactionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<TicketTransactionCreateOrConnectWithoutProfileInput>;

    @Field(() => [TicketTransactionUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<TicketTransactionUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => TicketTransactionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => TicketTransactionCreateManyProfileInputEnvelope)
    createMany?: TicketTransactionCreateManyProfileInputEnvelope;

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

    @Field(() => [TicketTransactionUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<TicketTransactionUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [TicketTransactionUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => TicketTransactionUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<TicketTransactionUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [TicketTransactionScalarWhereInput], {nullable:true})
    @Type(() => TicketTransactionScalarWhereInput)
    deleteMany?: Array<TicketTransactionScalarWhereInput>;
}
