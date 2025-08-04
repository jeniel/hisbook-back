import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTenantInput } from './user-create-without-tenant.input';

@InputType()
export class UserCreateOrConnectWithoutTenantInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserCreateWithoutTenantInput, {nullable:false})
    @Type(() => UserCreateWithoutTenantInput)
    create!: UserCreateWithoutTenantInput;
}
