import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TenantUpdateOneWithoutDocumentsNestedInput } from '../tenant/tenant-update-one-without-documents-nested.input';

@InputType()
export class documentsUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    client_id?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneWithoutDocumentsNestedInput, {nullable:true})
    tenant?: TenantUpdateOneWithoutDocumentsNestedInput;
}
