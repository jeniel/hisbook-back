import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutDocumentsInput } from './tenant-create-without-documents.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutDocumentsInput } from './tenant-create-or-connect-without-documents.input';
import { TenantUpsertWithoutDocumentsInput } from './tenant-upsert-without-documents.input';
import { TenantWhereInput } from './tenant-where.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutDocumentsInput } from './tenant-update-to-one-with-where-without-documents.input';

@InputType()
export class TenantUpdateOneWithoutDocumentsNestedInput {

    @Field(() => TenantCreateWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantCreateWithoutDocumentsInput)
    create?: TenantCreateWithoutDocumentsInput;

    @Field(() => TenantCreateOrConnectWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutDocumentsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput;

    @Field(() => TenantUpsertWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantUpsertWithoutDocumentsInput)
    upsert?: TenantUpsertWithoutDocumentsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    disconnect?: TenantWhereInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    delete?: TenantWhereInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutDocumentsInput)
    update?: TenantUpdateToOneWithWhereWithoutDocumentsInput;
}
