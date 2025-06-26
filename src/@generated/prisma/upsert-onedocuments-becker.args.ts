import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerWhereUniqueInput } from '../documents-becker/documents-becker-where-unique.input';
import { Type } from 'class-transformer';
import { documents_beckerCreateInput } from '../documents-becker/documents-becker-create.input';
import { documents_beckerUpdateInput } from '../documents-becker/documents-becker-update.input';

@ArgsType()
export class UpsertOnedocumentsBeckerArgs {

    @Field(() => documents_beckerWhereUniqueInput, {nullable:false})
    @Type(() => documents_beckerWhereUniqueInput)
    where!: documents_beckerWhereUniqueInput;

    @Field(() => documents_beckerCreateInput, {nullable:false})
    @Type(() => documents_beckerCreateInput)
    create!: documents_beckerCreateInput;

    @Field(() => documents_beckerUpdateInput, {nullable:false})
    @Type(() => documents_beckerUpdateInput)
    update!: documents_beckerUpdateInput;
}
