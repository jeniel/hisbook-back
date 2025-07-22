import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistanceMetric } from '../prisma/distance-metric.enum';
import { keyword_daily } from '../keyword-daily/keyword-daily.model';
import { keywords } from '../keywords/keywords.model';
import { User } from '../user/user.model';
import { TenantCount } from './tenant-count.output';

@ObjectType()
export class Tenant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isApprove!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    nanoid!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    chatTableName!: string | null;

    @Field(() => String, {nullable:true})
    documentTableName!: string | null;

    @Field(() => String, {nullable:true})
    collectionName!: string | null;

    @Field(() => Int, {nullable:true})
    size!: number | null;

    @Field(() => DistanceMetric, {defaultValue:'Cosine',nullable:false})
    distance!: `${DistanceMetric}`;

    @Field(() => [keyword_daily], {nullable:true})
    keywordDailies?: Array<keyword_daily>;

    @Field(() => [keywords], {nullable:true})
    keywords?: Array<keywords>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => TenantCount, {nullable:false})
    _count?: TenantCount;
}
