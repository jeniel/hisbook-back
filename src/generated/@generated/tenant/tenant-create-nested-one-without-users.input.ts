import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutUsersInput } from './tenant-create-without-users.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutUsersInput } from './tenant-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutUsersInput {

    @Field(() => TenantCreateWithoutUsersInput, {nullable:true})
    @Type(() => TenantCreateWithoutUsersInput)
    create?: TenantCreateWithoutUsersInput;

    @Field(() => TenantCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutUsersInput)
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;
}
