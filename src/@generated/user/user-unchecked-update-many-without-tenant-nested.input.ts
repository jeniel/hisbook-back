import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTenantInput } from './user-create-without-tenant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTenantInput } from './user-create-or-connect-without-tenant.input';
import { UserUpsertWithWhereUniqueWithoutTenantInput } from './user-upsert-with-where-unique-without-tenant.input';
import { UserCreateManyTenantInputEnvelope } from './user-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutTenantInput } from './user-update-with-where-unique-without-tenant.input';
import { UserUpdateManyWithWhereWithoutTenantInput } from './user-update-many-with-where-without-tenant.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutTenantNestedInput {

    @Field(() => [UserCreateWithoutTenantInput], {nullable:true})
    @Type(() => UserCreateWithoutTenantInput)
    create?: Array<UserCreateWithoutTenantInput>;

    @Field(() => [UserCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTenantInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => UserCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyTenantInputEnvelope)
    createMany?: UserCreateManyTenantInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
