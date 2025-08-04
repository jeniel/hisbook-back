import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutKeywordsInput } from './tenant-update-without-keywords.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutKeywordsInput } from './tenant-create-without-keywords.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutKeywordsInput {

    @Field(() => TenantUpdateWithoutKeywordsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutKeywordsInput)
    update!: TenantUpdateWithoutKeywordsInput;

    @Field(() => TenantCreateWithoutKeywordsInput, {nullable:false})
    @Type(() => TenantCreateWithoutKeywordsInput)
    create!: TenantCreateWithoutKeywordsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
