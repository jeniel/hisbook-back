import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KeywordCreateWithoutTenantInput } from './keyword-create-without-tenant.input';
import { Type } from 'class-transformer';
import { KeywordCreateOrConnectWithoutTenantInput } from './keyword-create-or-connect-without-tenant.input';
import { KeywordUpsertWithWhereUniqueWithoutTenantInput } from './keyword-upsert-with-where-unique-without-tenant.input';
import { KeywordCreateManyTenantInputEnvelope } from './keyword-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { KeywordUpdateWithWhereUniqueWithoutTenantInput } from './keyword-update-with-where-unique-without-tenant.input';
import { KeywordUpdateManyWithWhereWithoutTenantInput } from './keyword-update-many-with-where-without-tenant.input';
import { KeywordScalarWhereInput } from './keyword-scalar-where.input';

@InputType()
export class KeywordUpdateManyWithoutTenantNestedInput {

    @Field(() => [KeywordCreateWithoutTenantInput], {nullable:true})
    @Type(() => KeywordCreateWithoutTenantInput)
    create?: Array<KeywordCreateWithoutTenantInput>;

    @Field(() => [KeywordCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => KeywordCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<KeywordCreateOrConnectWithoutTenantInput>;

    @Field(() => [KeywordUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => KeywordUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<KeywordUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => KeywordCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => KeywordCreateManyTenantInputEnvelope)
    createMany?: KeywordCreateManyTenantInputEnvelope;

    @Field(() => [KeywordWhereUniqueInput], {nullable:true})
    @Type(() => KeywordWhereUniqueInput)
    set?: Array<Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>>;

    @Field(() => [KeywordWhereUniqueInput], {nullable:true})
    @Type(() => KeywordWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>>;

    @Field(() => [KeywordWhereUniqueInput], {nullable:true})
    @Type(() => KeywordWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>>;

    @Field(() => [KeywordWhereUniqueInput], {nullable:true})
    @Type(() => KeywordWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>>;

    @Field(() => [KeywordUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => KeywordUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<KeywordUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [KeywordUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => KeywordUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<KeywordUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [KeywordScalarWhereInput], {nullable:true})
    @Type(() => KeywordScalarWhereInput)
    deleteMany?: Array<KeywordScalarWhereInput>;
}
