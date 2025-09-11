import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutCreatedByInput } from './ticket-create-without-created-by.input';

@InputType()
export class TicketCreateOrConnectWithoutCreatedByInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => TicketCreateWithoutCreatedByInput)
    create!: TicketCreateWithoutCreatedByInput;
}
