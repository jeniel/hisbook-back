import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerCreateInput } from '../documents-becker/documents-becker-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedocumentsBeckerArgs {

    @Field(() => documents_beckerCreateInput, {nullable:true})
    @Type(() => documents_beckerCreateInput)
    data?: documents_beckerCreateInput;
}
