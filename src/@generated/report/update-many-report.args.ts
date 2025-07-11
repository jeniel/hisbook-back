import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportUpdateManyMutationInput } from './report-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReportWhereInput } from './report-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyReportArgs {

    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    @Type(() => ReportUpdateManyMutationInput)
    data!: ReportUpdateManyMutationInput;

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
