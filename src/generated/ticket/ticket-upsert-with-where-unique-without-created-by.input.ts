import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutCreatedByInput } from './ticket-update-without-created-by.input';
import { TicketCreateWithoutCreatedByInput } from './ticket-create-without-created-by.input';

@InputType()
export class TicketUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => TicketUpdateWithoutCreatedByInput)
    update!: TicketUpdateWithoutCreatedByInput;

    @Field(() => TicketCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => TicketCreateWithoutCreatedByInput)
    create!: TicketCreateWithoutCreatedByInput;
}
