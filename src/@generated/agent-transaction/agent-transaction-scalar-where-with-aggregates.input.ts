import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class AgentTransactionScalarWhereWithAggregatesInput {

    @Field(() => [AgentTransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AgentTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [AgentTransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AgentTransactionScalarWhereWithAggregatesInput>;

    @Field(() => [AgentTransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AgentTransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ticketTransactionId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    profileId?: StringNullableWithAggregatesFilter;
}
