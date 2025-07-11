import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyTenantInput } from './report-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class ReportCreateManyTenantInputEnvelope {

    @Field(() => [ReportCreateManyTenantInput], {nullable:false})
    @Type(() => ReportCreateManyTenantInput)
    data!: Array<ReportCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
