import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TenantUpdateOneRequiredWithoutKeywordsNestedInput } from '../tenant/tenant-update-one-required-without-keywords-nested.input';

@InputType()
export class KeywordUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyword?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: IntFieldUpdateOperationsInput;

    @Field(() => TenantUpdateOneRequiredWithoutKeywordsNestedInput, {nullable:true})
    tenant?: TenantUpdateOneRequiredWithoutKeywordsNestedInput;
}
