import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutUsersInput } from './tenant-update-without-users.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TenantUpdateWithoutUsersInput)
    data!: TenantUpdateWithoutUsersInput;
}
