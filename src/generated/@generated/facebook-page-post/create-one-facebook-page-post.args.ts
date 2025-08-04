import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostCreateInput } from './facebook-page-post-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacebookPagePostArgs {

    @Field(() => FacebookPagePostCreateInput, {nullable:false})
    @Type(() => FacebookPagePostCreateInput)
    data!: FacebookPagePostCreateInput;
}
