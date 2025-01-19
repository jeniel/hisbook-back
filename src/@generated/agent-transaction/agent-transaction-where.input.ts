import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TicketTransactionNullableScalarRelationFilter } from '../prisma/ticket-transaction-nullable-scalar-relation-filter.input';
import { ProfileNullableScalarRelationFilter } from '../prisma/profile-nullable-scalar-relation-filter.input';

@InputType()
export class AgentTransactionWhereInput {

    @Field(() => [AgentTransactionWhereInput], {nullable:true})
    AND?: Array<AgentTransactionWhereInput>;

    @Field(() => [AgentTransactionWhereInput], {nullable:true})
    OR?: Array<AgentTransactionWhereInput>;

    @Field(() => [AgentTransactionWhereInput], {nullable:true})
    NOT?: Array<AgentTransactionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketTransactionId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => TicketTransactionNullableScalarRelationFilter, {nullable:true})
    ticket?: TicketTransactionNullableScalarRelationFilter;

    @Field(() => ProfileNullableScalarRelationFilter, {nullable:true})
    profile?: ProfileNullableScalarRelationFilter;
}
