import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TenantCreateNestedOneWithoutKeywordDailiesInput } from '../tenant/tenant-create-nested-one-without-keyword-dailies.input';

@InputType()
export class keyword_dailyCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => TenantCreateNestedOneWithoutKeywordDailiesInput, {nullable:true})
    tenant?: TenantCreateNestedOneWithoutKeywordDailiesInput;
}
