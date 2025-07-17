import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class chats_demoWhereInput {

    @Field(() => [chats_demoWhereInput], {nullable:true})
    AND?: Array<chats_demoWhereInput>;

    @Field(() => [chats_demoWhereInput], {nullable:true})
    OR?: Array<chats_demoWhereInput>;

    @Field(() => [chats_demoWhereInput], {nullable:true})
    NOT?: Array<chats_demoWhereInput>;

    @Field(() => BigIntFilter, {nullable:true})
    id?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    created_at?: DateTimeNullableFilter;
}
