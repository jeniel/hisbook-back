import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class chats_beckerWhereInput {

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    AND?: Array<chats_beckerWhereInput>;

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    OR?: Array<chats_beckerWhereInput>;

    @Field(() => [chats_beckerWhereInput], {nullable:true})
    NOT?: Array<chats_beckerWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;
}
