import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_callinboundWhereUniqueInput } from '../documents-callinbound/documents-callinbound-where-unique.input';
import { Type } from 'class-transformer';
import { documents_callinboundCreateInput } from '../documents-callinbound/documents-callinbound-create.input';
import { documents_callinboundUpdateInput } from '../documents-callinbound/documents-callinbound-update.input';

@ArgsType()
export class UpsertOnedocumentsCallinboundArgs {

    @Field(() => documents_callinboundWhereUniqueInput, {nullable:false})
    @Type(() => documents_callinboundWhereUniqueInput)
    where!: documents_callinboundWhereUniqueInput;

    @Field(() => documents_callinboundCreateInput, {nullable:false})
    @Type(() => documents_callinboundCreateInput)
    create!: documents_callinboundCreateInput;

    @Field(() => documents_callinboundUpdateInput, {nullable:false})
    @Type(() => documents_callinboundUpdateInput)
    update!: documents_callinboundUpdateInput;
}
