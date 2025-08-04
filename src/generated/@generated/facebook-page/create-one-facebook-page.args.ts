import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageCreateInput } from './facebook-page-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacebookPageArgs {

    @Field(() => FacebookPageCreateInput, {nullable:false})
    @Type(() => FacebookPageCreateInput)
    data!: FacebookPageCreateInput;
}
