import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutCreatedByInput } from './ticket-update-without-created-by.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => TicketUpdateWithoutCreatedByInput)
    data!: TicketUpdateWithoutCreatedByInput;
}
