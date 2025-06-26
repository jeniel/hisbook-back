import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerCreateManyInput } from '../chat-becker/chat-becker-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManychatBeckerArgs {

    @Field(() => [chat_beckerCreateManyInput], {nullable:false})
    @Type(() => chat_beckerCreateManyInput)
    data!: Array<chat_beckerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
