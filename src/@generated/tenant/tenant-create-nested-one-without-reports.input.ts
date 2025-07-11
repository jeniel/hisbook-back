import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutReportsInput } from './tenant-create-without-reports.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutReportsInput } from './tenant-create-or-connect-without-reports.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutReportsInput {

    @Field(() => TenantCreateWithoutReportsInput, {nullable:true})
    @Type(() => TenantCreateWithoutReportsInput)
    create?: TenantCreateWithoutReportsInput;

    @Field(() => TenantCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutReportsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutReportsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;
}
