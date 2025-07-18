import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutKeywordDailiesInput } from './tenant-update-without-keyword-dailies.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutKeywordDailiesInput } from './tenant-create-without-keyword-dailies.input';
import { TenantWhereInput } from './tenant-where.input';

@InputType()
export class TenantUpsertWithoutKeywordDailiesInput {

    @Field(() => TenantUpdateWithoutKeywordDailiesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutKeywordDailiesInput)
    update!: TenantUpdateWithoutKeywordDailiesInput;

    @Field(() => TenantCreateWithoutKeywordDailiesInput, {nullable:false})
    @Type(() => TenantCreateWithoutKeywordDailiesInput)
    create!: TenantCreateWithoutKeywordDailiesInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;
}
