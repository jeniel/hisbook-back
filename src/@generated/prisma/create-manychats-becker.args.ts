import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerCreateManyInput } from '../chats-becker/chats-becker-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManychatsBeckerArgs {

    @Field(() => [chats_beckerCreateManyInput], {nullable:false})
    @Type(() => chats_beckerCreateManyInput)
    data!: Array<chats_beckerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
