import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyCreateWithoutTenantInput } from './keyword-daily-create-without-tenant.input';
import { Type } from 'class-transformer';
import { keyword_dailyCreateOrConnectWithoutTenantInput } from './keyword-daily-create-or-connect-without-tenant.input';
import { keyword_dailyUpsertWithWhereUniqueWithoutTenantInput } from './keyword-daily-upsert-with-where-unique-without-tenant.input';
import { keyword_dailyCreateManyTenantInputEnvelope } from './keyword-daily-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { keyword_dailyWhereUniqueInput } from './keyword-daily-where-unique.input';
import { keyword_dailyUpdateWithWhereUniqueWithoutTenantInput } from './keyword-daily-update-with-where-unique-without-tenant.input';
import { keyword_dailyUpdateManyWithWhereWithoutTenantInput } from './keyword-daily-update-many-with-where-without-tenant.input';
import { keyword_dailyScalarWhereInput } from './keyword-daily-scalar-where.input';

@InputType()
export class keyword_dailyUncheckedUpdateManyWithoutTenantNestedInput {

    @Field(() => [keyword_dailyCreateWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyCreateWithoutTenantInput)
    create?: Array<keyword_dailyCreateWithoutTenantInput>;

    @Field(() => [keyword_dailyCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<keyword_dailyCreateOrConnectWithoutTenantInput>;

    @Field(() => [keyword_dailyUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<keyword_dailyUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => keyword_dailyCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => keyword_dailyCreateManyTenantInputEnvelope)
    createMany?: keyword_dailyCreateManyTenantInputEnvelope;

    @Field(() => [keyword_dailyWhereUniqueInput], {nullable:true})
    @Type(() => keyword_dailyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>>;

    @Field(() => [keyword_dailyWhereUniqueInput], {nullable:true})
    @Type(() => keyword_dailyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>>;

    @Field(() => [keyword_dailyWhereUniqueInput], {nullable:true})
    @Type(() => keyword_dailyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>>;

    @Field(() => [keyword_dailyWhereUniqueInput], {nullable:true})
    @Type(() => keyword_dailyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>>;

    @Field(() => [keyword_dailyUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<keyword_dailyUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [keyword_dailyUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<keyword_dailyUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [keyword_dailyScalarWhereInput], {nullable:true})
    @Type(() => keyword_dailyScalarWhereInput)
    deleteMany?: Array<keyword_dailyScalarWhereInput>;
}
