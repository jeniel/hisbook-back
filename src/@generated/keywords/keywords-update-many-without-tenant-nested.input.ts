import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsCreateWithoutTenantInput } from './keywords-create-without-tenant.input';
import { Type } from 'class-transformer';
import { keywordsCreateOrConnectWithoutTenantInput } from './keywords-create-or-connect-without-tenant.input';
import { keywordsUpsertWithWhereUniqueWithoutTenantInput } from './keywords-upsert-with-where-unique-without-tenant.input';
import { keywordsCreateManyTenantInputEnvelope } from './keywords-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';
import { keywordsUpdateWithWhereUniqueWithoutTenantInput } from './keywords-update-with-where-unique-without-tenant.input';
import { keywordsUpdateManyWithWhereWithoutTenantInput } from './keywords-update-many-with-where-without-tenant.input';
import { keywordsScalarWhereInput } from './keywords-scalar-where.input';

@InputType()
export class keywordsUpdateManyWithoutTenantNestedInput {

    @Field(() => [keywordsCreateWithoutTenantInput], {nullable:true})
    @Type(() => keywordsCreateWithoutTenantInput)
    create?: Array<keywordsCreateWithoutTenantInput>;

    @Field(() => [keywordsCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => keywordsCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<keywordsCreateOrConnectWithoutTenantInput>;

    @Field(() => [keywordsUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => keywordsUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<keywordsUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => keywordsCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => keywordsCreateManyTenantInputEnvelope)
    createMany?: keywordsCreateManyTenantInputEnvelope;

    @Field(() => [keywordsWhereUniqueInput], {nullable:true})
    @Type(() => keywordsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>>;

    @Field(() => [keywordsWhereUniqueInput], {nullable:true})
    @Type(() => keywordsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>>;

    @Field(() => [keywordsWhereUniqueInput], {nullable:true})
    @Type(() => keywordsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>>;

    @Field(() => [keywordsWhereUniqueInput], {nullable:true})
    @Type(() => keywordsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>>;

    @Field(() => [keywordsUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => keywordsUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<keywordsUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [keywordsUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => keywordsUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<keywordsUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [keywordsScalarWhereInput], {nullable:true})
    @Type(() => keywordsScalarWhereInput)
    deleteMany?: Array<keywordsScalarWhereInput>;
}
