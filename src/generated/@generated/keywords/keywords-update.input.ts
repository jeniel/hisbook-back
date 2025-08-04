import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { TenantUpdateOneWithoutKeywordsNestedInput } from '../tenant/tenant-update-one-without-keywords-nested.input';

@InputType()
export class keywordsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyword?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    count?: NullableIntFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneWithoutKeywordsNestedInput, {nullable:true})
    tenant?: TenantUpdateOneWithoutKeywordsNestedInput;
}
