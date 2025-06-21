import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutUsersInput } from './tenant-create-without-users.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutUsersInput } from './tenant-create-or-connect-without-users.input';
import { TenantUpsertWithoutUsersInput } from './tenant-upsert-without-users.input';
import { TenantWhereInput } from './tenant-where.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutUsersInput } from './tenant-update-to-one-with-where-without-users.input';

@InputType()
export class TenantUpdateOneWithoutUsersNestedInput {

    @Field(() => TenantCreateWithoutUsersInput, {nullable:true})
    @Type(() => TenantCreateWithoutUsersInput)
    create?: TenantCreateWithoutUsersInput;

    @Field(() => TenantCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutUsersInput)
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput;

    @Field(() => TenantUpsertWithoutUsersInput, {nullable:true})
    @Type(() => TenantUpsertWithoutUsersInput)
    upsert?: TenantUpsertWithoutUsersInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    disconnect?: TenantWhereInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    delete?: TenantWhereInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutUsersInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutUsersInput)
    update?: TenantUpdateToOneWithWhereWithoutUsersInput;
}
