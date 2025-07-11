import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundUpdateInput } from '../documents-callinbound/documents-callinbound-update.input';
import { Type } from 'class-transformer';
import { documents_callinboundWhereUniqueInput } from '../documents-callinbound/documents-callinbound-where-unique.input';

@ArgsType()
export class UpdateOnedocumentsCallinboundArgs {

    @Field(() => documents_callinboundUpdateInput, {nullable:false})
    @Type(() => documents_callinboundUpdateInput)
    data!: documents_callinboundUpdateInput;

    @Field(() => documents_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => documents_callinboundWhereUniqueInput)
    where!: documents_callinboundWhereUniqueInput;
}
