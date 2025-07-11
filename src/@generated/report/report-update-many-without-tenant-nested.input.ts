import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutTenantInput } from './report-create-without-tenant.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutTenantInput } from './report-create-or-connect-without-tenant.input';
import { ReportUpsertWithWhereUniqueWithoutTenantInput } from './report-upsert-with-where-unique-without-tenant.input';
import { ReportCreateManyTenantInputEnvelope } from './report-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { ReportUpdateWithWhereUniqueWithoutTenantInput } from './report-update-with-where-unique-without-tenant.input';
import { ReportUpdateManyWithWhereWithoutTenantInput } from './report-update-many-with-where-without-tenant.input';
import { ReportScalarWhereInput } from './report-scalar-where.input';

@InputType()
export class ReportUpdateManyWithoutTenantNestedInput {

    @Field(() => [ReportCreateWithoutTenantInput], {nullable:true})
    @Type(() => ReportCreateWithoutTenantInput)
    create?: Array<ReportCreateWithoutTenantInput>;

    @Field(() => [ReportCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => ReportCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTenantInput>;

    @Field(() => [ReportUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => ReportUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<ReportUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => ReportCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => ReportCreateManyTenantInputEnvelope)
    createMany?: ReportCreateManyTenantInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReportWhereUniqueInput, 'id'>>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReportWhereUniqueInput, 'id'>>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReportWhereUniqueInput, 'id'>>;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReportWhereUniqueInput, 'id'>>;

    @Field(() => [ReportUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => ReportUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<ReportUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [ReportUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => ReportUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<ReportUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [ReportScalarWhereInput], {nullable:true})
    @Type(() => ReportScalarWhereInput)
    deleteMany?: Array<ReportScalarWhereInput>;
}
