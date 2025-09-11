import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketUpdateInput } from './ticket-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@ArgsType()
export class UpdateOneTicketArgs {

    @Field(() => TicketUpdateInput, {nullable:false})
    @Type(() => TicketUpdateInput)
    data!: TicketUpdateInput;

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;
}
