import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { chats_beckerWhereInput } from './chats-becker-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class chats_beckerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    AND?: Array<chats_beckerWhereInput>;

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    OR?: Array<chats_beckerWhereInput>;

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    NOT?: Array<chats_beckerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;
}
