import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutReportsInput } from './tenant-update-without-reports.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutReportsInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutReportsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutReportsInput)
    data!: TenantUpdateWithoutReportsInput;
}
