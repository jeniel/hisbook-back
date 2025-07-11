import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportCreateWithoutTenantInput } from './report-create-without-tenant.input';

@InputType()
export class ReportCreateOrConnectWithoutTenantInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    @Type(() => ReportWhereUniqueInput)
    where!: Prisma.AtLeast<ReportWhereUniqueInput, 'id'>;

    @Field(() => ReportCreateWithoutTenantInput, {nullable:false})
    @Type(() => ReportCreateWithoutTenantInput)
    create!: ReportCreateWithoutTenantInput;
}
