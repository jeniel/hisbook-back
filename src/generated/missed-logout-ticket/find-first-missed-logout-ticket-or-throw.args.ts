import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissedLogoutTicketWhereInput } from './missed-logout-ticket-where.input';
import { Type } from 'class-transformer';
import { MissedLogoutTicketOrderByWithRelationInput } from './missed-logout-ticket-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MissedLogoutTicketWhereUniqueInput } from './missed-logout-ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MissedLogoutTicketScalarFieldEnum } from './missed-logout-ticket-scalar-field.enum';

@ArgsType()
export class FindFirstMissedLogoutTicketOrThrowArgs {

    @Field(() => MissedLogoutTicketWhereInput, {nullable:true})
    @Type(() => MissedLogoutTicketWhereInput)
    where?: MissedLogoutTicketWhereInput;

    @Field(() => [MissedLogoutTicketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MissedLogoutTicketOrderByWithRelationInput>;

    @Field(() => MissedLogoutTicketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MissedLogoutTicketWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MissedLogoutTicketScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MissedLogoutTicketScalarFieldEnum}`>;
}
