import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { Type } from 'class-transformer';
import { TenantUpdateWithoutKeywordsInput } from './tenant-update-without-keywords.input';

@InputType()
export class TenantUpdateToOneWithWhereWithoutKeywordsInput {

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => TenantUpdateWithoutKeywordsInput, {nullable:false})
    @Type(() => TenantUpdateWithoutKeywordsInput)
    data!: TenantUpdateWithoutKeywordsInput;
}
