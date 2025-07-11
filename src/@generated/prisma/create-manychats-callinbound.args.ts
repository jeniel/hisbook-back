import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { chats_callinboundCreateManyInput } from '../chats-callinbound/chats-callinbound-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManychatsCallinboundArgs {

    @Field(() => [chats_callinboundCreateManyInput], {nullable:false})
    @Type(() => chats_callinboundCreateManyInput)
    data!: Array<chats_callinboundCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
