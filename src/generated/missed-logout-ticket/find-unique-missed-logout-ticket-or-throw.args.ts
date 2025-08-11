import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMissedLogoutTicketOrThrowArgs {

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:false})
    @Type(() => MissedLogoutTicketWhereUniqueInput)
    where!: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;
}
