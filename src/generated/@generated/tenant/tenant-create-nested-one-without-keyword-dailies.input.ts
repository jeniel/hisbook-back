import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutKeywordDailiesInput } from './tenant-create-without-keyword-dailies.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutKeywordDailiesInput } from './tenant-create-or-connect-without-keyword-dailies.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@InputType()
export class TenantCreateNestedOneWithoutKeywordDailiesInput {

    @Field(() => TenantCreateWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantCreateWithoutKeywordDailiesInput)
    create?: TenantCreateWithoutKeywordDailiesInput;

    @Field(() => TenantCreateOrConnectWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutKeywordDailiesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordDailiesInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;
}
