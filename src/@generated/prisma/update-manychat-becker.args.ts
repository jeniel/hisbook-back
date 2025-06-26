import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chat_beckerUpdateManyMutationInput } from '../chat-becker/chat-becker-update-many-mutation.input';
import { Type } from 'class-transformer';
import { chat_beckerWhereInput } from '../chat-becker/chat-becker-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManychatBeckerArgs {

    @Field(() => chat_beckerUpdateManyMutationInput, {nullable:false})
    @Type(() => chat_beckerUpdateManyMutationInput)
    data!: chat_beckerUpdateManyMutationInput;

    @Field(() => chat_beckerWhereInput, {nullable:true})
    @Type(() => chat_beckerWhereInput)
    where?: chat_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
