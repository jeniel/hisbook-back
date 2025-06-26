import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoCreateInput } from '../documents-demo/documents-demo-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedocumentsDemoArgs {

    @Field(() => documents_demoCreateInput, {nullable:true})
    @Type(() => documents_demoCreateInput)
    data?: documents_demoCreateInput;
}
