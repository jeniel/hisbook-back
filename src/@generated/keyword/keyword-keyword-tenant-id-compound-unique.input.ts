import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class KeywordKeywordTenantIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => String, {nullable:false})
    tenantId!: string;
}
