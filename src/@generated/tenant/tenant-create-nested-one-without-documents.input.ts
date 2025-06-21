import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutDocumentsInput } from './tenant-create-without-documents.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutDocumentsInput } from './tenant-create-or-connect-without-documents.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutDocumentsInput {

    @Field(() => TenantCreateWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantCreateWithoutDocumentsInput)
    create?: TenantCreateWithoutDocumentsInput;

    @Field(() => TenantCreateOrConnectWithoutDocumentsInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutDocumentsInput)
    connectOrCreate?: TenantCreateOrConnectWithoutDocumentsInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id'>;
}
