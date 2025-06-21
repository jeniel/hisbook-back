import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutTenantInput } from '../user/user-create-nested-many-without-tenant.input';
import { documentsCreateNestedManyWithoutTenantInput } from '../documents/documents-create-nested-many-without-tenant.input';

@InputType()
export class TenantCreateInput {

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

    @Field(() => UserCreateNestedManyWithoutTenantInput, {nullable:true})
    users?: UserCreateNestedManyWithoutTenantInput;

    @Field(() => documentsCreateNestedManyWithoutTenantInput, {nullable:true})
    documents?: documentsCreateNestedManyWithoutTenantInput;
}
