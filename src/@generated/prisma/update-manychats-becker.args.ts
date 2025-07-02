import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_beckerUpdateManyMutationInput } from '../chats-becker/chats-becker-update-many-mutation.input';
import { Type } from 'class-transformer';
import { chats_beckerWhereInput } from '../chats-becker/chats-becker-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManychatsBeckerArgs {

    @Field(() => chats_beckerUpdateManyMutationInput, {nullable:false})
    @Type(() => chats_beckerUpdateManyMutationInput)
    data!: chats_beckerUpdateManyMutationInput;

    @Field(() => chats_beckerWhereInput, {nullable:true})
    @Type(() => chats_beckerWhereInput)
    where?: chats_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
