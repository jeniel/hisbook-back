import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoUpdateManyMutationInput } from '../chats-demo/chats-demo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { chats_demoWhereInput } from '../chats-demo/chats-demo-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManychatsDemoArgs {

    @Field(() => chats_demoUpdateManyMutationInput, {nullable:false})
    @Type(() => chats_demoUpdateManyMutationInput)
    data!: chats_demoUpdateManyMutationInput;

    @Field(() => chats_demoWhereInput, {nullable:true})
    @Type(() => chats_demoWhereInput)
    where?: chats_demoWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
