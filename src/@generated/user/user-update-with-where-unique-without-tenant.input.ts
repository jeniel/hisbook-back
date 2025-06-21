import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTenantInput } from './user-update-without-tenant.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'username'>;

    @Field(() => UserUpdateWithoutTenantInput, {nullable:false})
    @Type(() => UserUpdateWithoutTenantInput)
    data!: UserUpdateWithoutTenantInput;
}
