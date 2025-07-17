import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { chats_demoWhereInput } from './chats-demo-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class chats_demoWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => [chats_demoWhereInput], {nullable:true})
    AND?: Array<chats_demoWhereInput>;

    @Field(() => [chats_demoWhereInput], {nullable:true})
    OR?: Array<chats_demoWhereInput>;

    @Field(() => [chats_demoWhereInput], {nullable:true})
    NOT?: Array<chats_demoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;
}
