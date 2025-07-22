import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistanceMetric } from '../prisma/distance-metric.enum';

@ObjectType()
export class TenantMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApprove?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    nanoid?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    chatTableName?: string;

    @Field(() => String, {nullable:true})
    documentTableName?: string;

    @Field(() => String, {nullable:true})
    collectionName?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => DistanceMetric, {nullable:true})
    distance?: `${DistanceMetric}`;
}
