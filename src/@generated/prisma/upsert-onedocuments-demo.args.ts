import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoWhereUniqueInput } from '../documents-demo/documents-demo-where-unique.input';
import { Type } from 'class-transformer';
import { documents_demoCreateInput } from '../documents-demo/documents-demo-create.input';
import { documents_demoUpdateInput } from '../documents-demo/documents-demo-update.input';

@ArgsType()
export class UpsertOnedocumentsDemoArgs {

    @Field(() => documents_demoWhereUniqueInput, {nullable:false})
    @Type(() => documents_demoWhereUniqueInput)
    where!: documents_demoWhereUniqueInput;

    @Field(() => documents_demoCreateInput, {nullable:false})
    @Type(() => documents_demoCreateInput)
    create!: documents_demoCreateInput;

    @Field(() => documents_demoUpdateInput, {nullable:false})
    @Type(() => documents_demoUpdateInput)
    update!: documents_demoUpdateInput;
}
