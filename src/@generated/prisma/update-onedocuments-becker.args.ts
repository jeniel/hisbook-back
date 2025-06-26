import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerUpdateInput } from '../documents-becker/documents-becker-update.input';
import { Type } from 'class-transformer';
import { documents_beckerWhereUniqueInput } from '../documents-becker/documents-becker-where-unique.input';

@ArgsType()
export class UpdateOnedocumentsBeckerArgs {

    @Field(() => documents_beckerUpdateInput, {nullable:false})
    @Type(() => documents_beckerUpdateInput)
    data!: documents_beckerUpdateInput;

    @Field(() => documents_beckerWhereUniqueInput, {nullable:false})
    @Type(() => documents_beckerWhereUniqueInput)
    where!: documents_beckerWhereUniqueInput;
}
