import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistanceMetric } from '../prisma/distance-metric.enum';
import { TenantCountAggregate } from './tenant-count-aggregate.output';
import { TenantAvgAggregate } from './tenant-avg-aggregate.output';
import { TenantSumAggregate } from './tenant-sum-aggregate.output';
import { TenantMinAggregate } from './tenant-min-aggregate.output';
import { TenantMaxAggregate } from './tenant-max-aggregate.output';

@ObjectType()
export class TenantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false})
    isApprove!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    nanoid!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    chatTableName?: string;

    @Field(() => String, {nullable:true})
    documentTableName?: string;

    @Field(() => String, {nullable:true})
    collectionName?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => DistanceMetric, {nullable:false})
    distance!: `${DistanceMetric}`;

    @Field(() => TenantCountAggregate, {nullable:true})
    _count?: TenantCountAggregate;

    @Field(() => TenantAvgAggregate, {nullable:true})
    _avg?: TenantAvgAggregate;

    @Field(() => TenantSumAggregate, {nullable:true})
    _sum?: TenantSumAggregate;

    @Field(() => TenantMinAggregate, {nullable:true})
    _min?: TenantMinAggregate;

    @Field(() => TenantMaxAggregate, {nullable:true})
    _max?: TenantMaxAggregate;
}
