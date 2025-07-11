import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { chats_callinboundWhereInput } from './chats-callinbound-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class chats_callinboundWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => [chats_callinboundWhereInput], {nullable:true})
    AND?: Array<chats_callinboundWhereInput>;

    @Field(() => [chats_callinboundWhereInput], {nullable:true})
    OR?: Array<chats_callinboundWhereInput>;

    @Field(() => [chats_callinboundWhereInput], {nullable:true})
    NOT?: Array<chats_callinboundWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;
}
