import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutUsersInput } from './tenant-update-without-users.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutUsersInput } from './tenant-create-without-users.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutUsersInput {

    @Field(() => TenantUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TenantUpdateWithoutUsersInput)
    update!: TenantUpdateWithoutUsersInput;

    @Field(() => TenantCreateWithoutUsersInput, {nullable:false})
    @Type(() => TenantCreateWithoutUsersInput)
    create!: TenantCreateWithoutUsersInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
