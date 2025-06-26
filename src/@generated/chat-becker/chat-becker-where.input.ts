import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class chat_beckerWhereInput {

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    AND?: Array<chat_beckerWhereInput>;

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    OR?: Array<chat_beckerWhereInput>;

    @Field(() => [chat_beckerWhereInput], {nullable:true})
    NOT?: Array<chat_beckerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    session_id?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    message?: JsonFilter;
}
