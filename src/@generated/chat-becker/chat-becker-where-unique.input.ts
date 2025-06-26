import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { chat_beckerWhereInput } from './chat-becker-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class chat_beckerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    AND?: Array<chat_beckerWhereInput>;

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    OR?: Array<chat_beckerWhereInput>;

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    NOT?: Array<chat_beckerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    message?: JsonFilter;
}
