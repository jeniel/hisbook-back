import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTenantInput } from './user-create-without-tenant.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTenantInput } from './user-create-or-connect-without-tenant.input';
import { UserCreateManyTenantInputEnvelope } from './user-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutTenantInput {

    @Field(() => [UserCreateWithoutTenantInput], {nullable:true})
    @Type(() => UserCreateWithoutTenantInput)
    create?: Array<UserCreateWithoutTenantInput>;

    @Field(() => [UserCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutTenantInput>;

    @Field(() => UserCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyTenantInputEnvelope)
    createMany?: UserCreateManyTenantInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>>;
}
