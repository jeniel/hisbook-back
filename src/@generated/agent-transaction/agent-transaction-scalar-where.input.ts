import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AgentTransactionScalarWhereInput {

    @Field(() => [AgentTransactionScalarWhereInput], {nullable:true})
    AND?: Array<AgentTransactionScalarWhereInput>;

    @Field(() => [AgentTransactionScalarWhereInput], {nullable:true})
    OR?: Array<AgentTransactionScalarWhereInput>;

    @Field(() => [AgentTransactionScalarWhereInput], {nullable:true})
    NOT?: Array<AgentTransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketTransactionId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;
}
