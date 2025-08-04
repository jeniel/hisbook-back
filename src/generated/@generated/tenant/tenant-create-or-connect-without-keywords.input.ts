import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutKeywordsInput } from './tenant-create-without-keywords.input';

@InputType()
export class TenantCreateOrConnectWithoutKeywordsInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantCreateWithoutKeywordsInput, {nullable:false})
    @Type(() => TenantCreateWithoutKeywordsInput)
    create!: TenantCreateWithoutKeywordsInput;
}
