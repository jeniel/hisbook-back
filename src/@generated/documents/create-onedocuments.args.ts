import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documentsCreateInput } from './documents-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedocumentsArgs {

    @Field(() => documentsCreateInput, {nullable:true})
    @Type(() => documentsCreateInput)
    data?: documentsCreateInput;
}
