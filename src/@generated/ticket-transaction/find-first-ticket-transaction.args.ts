import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketTransactionWhereInput } from './ticket-transaction-where.input';
import { Type } from 'class-transformer';
import { TicketTransactionOrderByWithRelationInput } from './ticket-transaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketTransactionWhereUniqueInput } from './ticket-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketTransactionScalarFieldEnum } from './ticket-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstTicketTransactionArgs {

    @Field(() => TicketTransactionWhereInput, {nullable:true})
    @Type(() => TicketTransactionWhereInput)
    where?: TicketTransactionWhereInput;

    @Field(() => [TicketTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketTransactionOrderByWithRelationInput>;

    @Field(() => TicketTransactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketTransactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TicketTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TicketTransactionScalarFieldEnum>;
}
