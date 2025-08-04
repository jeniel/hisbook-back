import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantCreateWithoutKeywordDailiesInput } from './tenant-create-without-keyword-dailies.input';
import { Type } from 'class-transformer';
import { TenantCreateOrConnectWithoutKeywordDailiesInput } from './tenant-create-or-connect-without-keyword-dailies.input';
import { TenantUpsertWithoutKeywordDailiesInput } from './tenant-upsert-without-keyword-dailies.input';
import { TenantWhereInput } from './tenant-where.input';
import { Prisma } from '@prisma/client';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantUpdateToOneWithWhereWithoutKeywordDailiesInput } from './tenant-update-to-one-with-where-without-keyword-dailies.input';

@InputType()
export class TenantUpdateOneWithoutKeywordDailiesNestedInput {

    @Field(() => TenantCreateWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantCreateWithoutKeywordDailiesInput)
    create?: TenantCreateWithoutKeywordDailiesInput;

    @Field(() => TenantCreateOrConnectWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantCreateOrConnectWithoutKeywordDailiesInput)
    connectOrCreate?: TenantCreateOrConnectWithoutKeywordDailiesInput;

    @Field(() => TenantUpsertWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantUpsertWithoutKeywordDailiesInput)
    upsert?: TenantUpsertWithoutKeywordDailiesInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    disconnect?: TenantWhereInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    delete?: TenantWhereInput;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    @Type(() => TenantWhereUniqueInput)
    connect?: Prisma.AtLeast<TenantWhereUniqueInput, 'id' | 'nanoid' | 'slug'>;

    @Field(() => TenantUpdateToOneWithWhereWithoutKeywordDailiesInput, {nullable:true})
    @Type(() => TenantUpdateToOneWithWhereWithoutKeywordDailiesInput)
    update?: TenantUpdateToOneWithWhereWithoutKeywordDailiesInput;
}
