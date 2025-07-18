import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyCreateNestedManyWithoutTenantInput } from '../keyword-daily/keyword-daily-create-nested-many-without-tenant.input';
import { UserCreateNestedManyWithoutTenantInput } from '../user/user-create-nested-many-without-tenant.input';

@InputType()
export class TenantCreateWithoutKeywordsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApprove?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    nanoid?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    chatTableName?: string;

    @Field(() => String, {nullable:true})
    documentTableName?: string;

    @Field(() => keyword_dailyCreateNestedManyWithoutTenantInput, {nullable:true})
    keywordDailies?: keyword_dailyCreateNestedManyWithoutTenantInput;

    @Field(() => UserCreateNestedManyWithoutTenantInput, {nullable:true})
    users?: UserCreateNestedManyWithoutTenantInput;
}
