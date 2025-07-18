import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsCreateNestedManyWithoutTenantInput } from '../keywords/keywords-create-nested-many-without-tenant.input';
import { UserCreateNestedManyWithoutTenantInput } from '../user/user-create-nested-many-without-tenant.input';

@InputType()
export class TenantCreateWithoutKeywordDailiesInput {

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

    @Field(() => keywordsCreateNestedManyWithoutTenantInput, {nullable:true})
    keywords?: keywordsCreateNestedManyWithoutTenantInput;

    @Field(() => UserCreateNestedManyWithoutTenantInput, {nullable:true})
    users?: UserCreateNestedManyWithoutTenantInput;
}
