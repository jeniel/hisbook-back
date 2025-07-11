import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutReportsInput } from './tenant-update-without-reports.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutReportsInput } from './tenant-create-without-reports.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutReportsInput {

    @Field(() => TenantUpdateWithoutReportsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutReportsInput)
    update!: TenantUpdateWithoutReportsInput;

    @Field(() => TenantCreateWithoutReportsInput, {nullable:false})
    @Type(() => TenantCreateWithoutReportsInput)
    create!: TenantCreateWithoutReportsInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
