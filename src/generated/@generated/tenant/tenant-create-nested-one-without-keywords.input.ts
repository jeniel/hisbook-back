import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutKeywordsInput } from './tenant-create-without-keywords.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutKeywordsInput } from './tenant-create-or-connect-without-keywords.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutKeywordsInput {

    @Field(() => TenantCreateWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantCreateWithoutKeywordsInput)
    create?: TenantCreateWithoutKeywordsInput;

    @Field(() => TenantCreateOrConnectWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutKeywordsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;
}
