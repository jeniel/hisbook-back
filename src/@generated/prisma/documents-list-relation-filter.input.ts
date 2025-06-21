import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsWhereInput } from '../documents/documents-where.input';

@InputType()
export class DocumentsListRelationFilter {

    @Field(() => documentsWhereInput, {nullable:true})
    every?: documentsWhereInput;

    @Field(() => documentsWhereInput, {nullable:true})
    some?: documentsWhereInput;

    @Field(() => documentsWhereInput, {nullable:true})
    none?: documentsWhereInput;
}
