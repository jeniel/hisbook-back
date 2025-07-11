import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundCreateInput } from '../documents-callinbound/documents-callinbound-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedocumentsCallinboundArgs {

    @Field(() => documents_callinboundCreateInput, {nullable:true})
    @Type(() => documents_callinboundCreateInput)
    data?: documents_callinboundCreateInput;
}
