import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookDetailsCreateInput } from './facebook-details-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFacebookDetailsArgs {

    @Field(() => FacebookDetailsCreateInput, {nullable:false})
    @Type(() => FacebookDetailsCreateInput)
    data!: FacebookDetailsCreateInput;
}
