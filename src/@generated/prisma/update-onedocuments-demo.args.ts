import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_demoUpdateInput } from '../documents-demo/documents-demo-update.input';
import { Type } from 'class-transformer';
import { documents_demoWhereUniqueInput } from '../documents-demo/documents-demo-where-unique.input';

@ArgsType()
export class UpdateOnedocumentsDemoArgs {

    @Field(() => documents_demoUpdateInput, {nullable:false})
    @Type(() => documents_demoUpdateInput)
    data!: documents_demoUpdateInput;

    @Field(() => documents_demoWhereUniqueInput, {nullable:false})
    @Type(() => documents_demoWhereUniqueInput)
    where!: documents_demoWhereUniqueInput;
}
