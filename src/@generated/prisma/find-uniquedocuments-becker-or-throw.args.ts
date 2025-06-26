import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerWhereUniqueInput } from '../documents-becker/documents-becker-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquedocumentsBeckerOrThrowArgs {

    @Field(() => documents_beckerWhereUniqueInput, {nullable:false})
    @Type(() => documents_beckerWhereUniqueInput)
    where!: documents_beckerWhereUniqueInput;
}
