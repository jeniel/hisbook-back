import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { TenantCreateNestedOneWithoutDocumentsInput } from '../tenant/tenant-create-nested-one-without-documents.input';

@InputType()
export class documentsCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => TenantCreateNestedOneWithoutDocumentsInput, {nullable:true})
    tenant?: TenantCreateNestedOneWithoutDocumentsInput;
}
