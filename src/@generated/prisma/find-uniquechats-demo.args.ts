import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_demoWhereUniqueInput } from '../chats-demo/chats-demo-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquechatsDemoArgs {

    @Field(() => chats_demoWhereUniqueInput, {nullable:false})
    @Type(() => chats_demoWhereUniqueInput)
    where!: chats_demoWhereUniqueInput;
}
