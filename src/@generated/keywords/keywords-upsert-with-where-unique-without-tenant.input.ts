import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Type } from 'class-transformer';
import { keywordsUpdateWithoutTenantInput } from './keywords-update-without-tenant.input';
import { keywordsCreateWithoutTenantInput } from './keywords-create-without-tenant.input';

@InputType()
export class keywordsUpsertWithWhereUniqueWithoutTenantInput {

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => keywordsUpdateWithoutTenantInput, {nullable:false})
    @Type(() => keywordsUpdateWithoutTenantInput)
    update!: keywordsUpdateWithoutTenantInput;

    @Field(() => keywordsCreateWithoutTenantInput, {nullable:false})
    @Type(() => keywordsCreateWithoutTenantInput)
    create!: keywordsCreateWithoutTenantInput;
}
