import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeatureCountAggregate } from './feature-count-aggregate.output';
import { FeatureMinAggregate } from './feature-min-aggregate.output';
import { FeatureMaxAggregate } from './feature-max-aggregate.output';

@ObjectType()
export class FeatureGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FeatureCountAggregate, {nullable:true})
    _count?: FeatureCountAggregate;

    @Field(() => FeatureMinAggregate, {nullable:true})
    _min?: FeatureMinAggregate;

    @Field(() => FeatureMaxAggregate, {nullable:true})
    _max?: FeatureMaxAggregate;
}
