import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoCreateManyInput } from '../chats-demo/chats-demo-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManychatsDemoArgs {

    @Field(() => [chats_demoCreateManyInput], {nullable:false})
    @Type(() => chats_demoCreateManyInput)
    data!: Array<chats_demoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
