import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutReportsInput } from './tenant-create-without-reports.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutReportsInput } from './tenant-create-or-connect-without-reports.input';
import { TenantUpsertWithoutReportsInput } from './tenant-upsert-without-reports.input';
import { TenantWhereInput } from './tenant-where.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutReportsInput } from './tenant-update-to-one-with-where-without-reports.input';

@InputType()
export class TenantUpdateOneWithoutReportsNestedInput {

    @Field(() => TenantCreateWithoutReportsInput, {nullable:true})
    @Type(() => TenantCreateWithoutReportsInput)
    create?: TenantCreateWithoutReportsInput;

    @Field(() => TenantCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutReportsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutReportsInput;

    @Field(() => TenantUpsertWithoutReportsInput, {nullable:true})
    @Type(() => TenantUpsertWithoutReportsInput)
    upsert?: TenantUpsertWithoutReportsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    disconnect?: TenantWhereInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    delete?: TenantWhereInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutReportsInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutReportsInput)
    update?: TenantUpdateToOneWithWhereWithoutReportsInput;
}
