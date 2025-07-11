import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutTenantInput } from './report-create-without-tenant.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutTenantInput } from './report-create-or-connect-without-tenant.input';
import { ReportCreateManyTenantInputEnvelope } from './report-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportCreateNestedManyWithoutTenantInput {

    @Field(() => [ReportCreateWithoutTenantInput], {nullable:true})
    @Type(() => ReportCreateWithoutTenantInput)
    create?: Array<ReportCreateWithoutTenantInput>;

    @Field(() => [ReportCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => ReportCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<ReportCreateOrConnectWithoutTenantInput>;

    @Field(() => ReportCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => ReportCreateManyTenantInputEnvelope)
    createMany?: ReportCreateManyTenantInputEnvelope;

    @Field(() => [ReportWhereUniqueInput], {nullable:true})
    @Type(() => ReportWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReportWhereUniqueInput, 'id'>>;
}
