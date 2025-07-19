import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutKeywordsInput } from './tenant-create-without-keywords.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutKeywordsInput } from './tenant-create-or-connect-without-keywords.input';
import { TenantUpsertWithoutKeywordsInput } from './tenant-upsert-without-keywords.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutKeywordsInput } from './tenant-update-to-one-with-where-without-keywords.input';

@InputType()
export class TenantUpdateOneRequiredWithoutKeywordsNestedInput {

    @Field(() => TenantCreateWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantCreateWithoutKeywordsInput)
    create?: TenantCreateWithoutKeywordsInput;

    @Field(() => TenantCreateOrConnectWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutKeywordsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordsInput;

    @Field(() => TenantUpsertWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantUpsertWithoutKeywordsInput)
    upsert?: TenantUpsertWithoutKeywordsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutKeywordsInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutKeywordsInput)
    update?: TenantUpdateToOneWithWhereWithoutKeywordsInput;
}
