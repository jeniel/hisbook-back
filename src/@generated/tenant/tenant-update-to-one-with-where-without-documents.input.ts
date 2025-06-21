import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutDocumentsInput } from './tenant-update-without-documents.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutDocumentsInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutDocumentsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutDocumentsInput)
    data!: TenantUpdateWithoutDocumentsInput;
}
