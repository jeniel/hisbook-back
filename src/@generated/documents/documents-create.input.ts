import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TenantCreateNestedOneWithoutDocumentsInput } from '../tenant/tenant-create-nested-one-without-documents.input';

@InputType()
export class documentsCreateInput {

    @Field(() => String, {nullable:true})
    client_id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TenantCreateNestedOneWithoutDocumentsInput, {nullable:true})
    tenant?: TenantCreateNestedOneWithoutDocumentsInput;
}
