import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutKeywordDailiesInput } from './tenant-update-without-keyword-dailies.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutKeywordDailiesInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutKeywordDailiesInput, {nullable:false})
    @Type(() => TenantUpdateWithoutKeywordDailiesInput)
    data!: TenantUpdateWithoutKeywordDailiesInput;
}
