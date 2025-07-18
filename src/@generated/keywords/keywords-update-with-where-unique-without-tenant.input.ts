import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Type } from 'class-transformer';
import { keywordsUpdateWithoutTenantInput } from './keywords-update-without-tenant.input';

@InputType()
export class keywordsUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>;

    @Field(() => keywordsUpdateWithoutTenantInput, {nullable:false})
    @Type(() => keywordsUpdateWithoutTenantInput)
    data!: keywordsUpdateWithoutTenantInput;
}
