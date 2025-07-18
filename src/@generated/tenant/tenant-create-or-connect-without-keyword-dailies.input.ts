import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutKeywordDailiesInput } from './tenant-create-without-keyword-dailies.input';

@InputType()
export class TenantCreateOrConnectWithoutKeywordDailiesInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantCreateWithoutKeywordDailiesInput, {nullable:false})
    @Type(() => TenantCreateWithoutKeywordDailiesInput)
    create!: TenantCreateWithoutKeywordDailiesInput;
}
