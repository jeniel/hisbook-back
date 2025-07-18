import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { Type } from 'class-transformer';
import { keywordsCreateWithoutTenantInput } from './keywords-create-without-tenant.input';

@InputType()
export class keywordsCreateOrConnectWithoutTenantInput {

    @Field(() => keywordsWhereUniqueInput, {nullable:false})
    @Type(() => keywordsWhereUniqueInput)
    where!: Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>;

    @Field(() => keywordsCreateWithoutTenantInput, {nullable:false})
    @Type(() => keywordsCreateWithoutTenantInput)
    create!: keywordsCreateWithoutTenantInput;
}
