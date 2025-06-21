import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutUsersInput } from './tenant-create-without-users.input';

@InputType()
export class TenantCreateOrConnectWithoutUsersInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;

    @Field(() => TenantCreateWithoutUsersInput, {nullable:false})
    @Type(() => TenantCreateWithoutUsersInput)
    create!: TenantCreateWithoutUsersInput;
}
