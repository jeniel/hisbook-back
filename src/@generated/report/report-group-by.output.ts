import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReportCountAggregate } from './report-count-aggregate.output';
import { ReportAvgAggregate } from './report-avg-aggregate.output';
import { ReportSumAggregate } from './report-sum-aggregate.output';
import { ReportMinAggregate } from './report-min-aggregate.output';
import { ReportMaxAggregate } from './report-max-aggregate.output';

@ObjectType()
export class ReportGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => [String], {nullable:true})
    keywords?: Array<string>;

    @Field(() => String, {nullable:false})
    message_intent!: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => String, {nullable:true})
    keyword?: string;

    @Field(() => ReportCountAggregate, {nullable:true})
    _count?: ReportCountAggregate;

    @Field(() => ReportAvgAggregate, {nullable:true})
    _avg?: ReportAvgAggregate;

    @Field(() => ReportSumAggregate, {nullable:true})
    _sum?: ReportSumAggregate;

    @Field(() => ReportMinAggregate, {nullable:true})
    _min?: ReportMinAggregate;

    @Field(() => ReportMaxAggregate, {nullable:true})
    _max?: ReportMaxAggregate;
}
