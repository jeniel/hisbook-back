import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutDocumentsInput } from './tenant-update-without-documents.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutDocumentsInput } from './tenant-create-without-documents.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutDocumentsInput {

    @Field(() => TenantUpdateWithoutDocumentsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutDocumentsInput)
    update!: TenantUpdateWithoutDocumentsInput;

    @Field(() => TenantCreateWithoutDocumentsInput, {nullable:false})
    @Type(() => TenantCreateWithoutDocumentsInput)
    create!: TenantCreateWithoutDocumentsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
