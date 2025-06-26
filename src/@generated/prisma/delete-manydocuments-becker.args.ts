import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { documents_beckerWhereInput } from '../documents-becker/documents-becker-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManydocumentsBeckerArgs {

    @Field(() => documents_beckerWhereInput, {nullable:true})
    @Type(() => documents_beckerWhereInput)
    where?: documents_beckerWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
