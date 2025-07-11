import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportUpdateWithoutTenantInput } from './report-update-without-tenant.input';

@InputType()
export class ReportUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    @Type(() => ReportWhereUniqueInput)
    where!: Prisma.AtLeast<ReportWhereUniqueInput, 'id'>;

    @Field(() => ReportUpdateWithoutTenantInput, {nullable:false})
    @Type(() => ReportUpdateWithoutTenantInput)
    data!: ReportUpdateWithoutTenantInput;
}
