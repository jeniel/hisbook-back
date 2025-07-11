import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutReportsInput } from './tenant-create-without-reports.input';

@InputType()
export class TenantCreateOrConnectWithoutReportsInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantCreateWithoutReportsInput, {nullable:false})
    @Type(() => TenantCreateWithoutReportsInput)
    create!: TenantCreateWithoutReportsInput;
}
