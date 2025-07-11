import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundWhereUniqueInput } from '../documents-callinbound/documents-callinbound-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedocumentsCallinboundArgs {

    @Field(() => documents_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => documents_callinboundWhereUniqueInput)
    where!: documents_callinboundWhereUniqueInput;
}
