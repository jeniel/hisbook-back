import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutDocumentsInput } from './tenant-create-without-documents.input';

@InputType()
export class TenantCreateOrConnectWithoutDocumentsInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantCreateWithoutDocumentsInput, {nullable:false})
    @Type(() => TenantCreateWithoutDocumentsInput)
    create!: TenantCreateWithoutDocumentsInput;
}
