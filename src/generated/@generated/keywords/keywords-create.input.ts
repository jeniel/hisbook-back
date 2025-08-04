import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TenantCreateNestedOneWithoutKeywordsInput } from '../tenant/tenant-create-nested-one-without-keywords.input';

@InputType()
export class keywordsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => TenantCreateNestedOneWithoutKeywordsInput, {nullable:true})
    tenant?: TenantCreateNestedOneWithoutKeywordsInput;
}
