import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VitalSignCountAggregate } from './vital-sign-count-aggregate.output';
import { VitalSignAvgAggregate } from './vital-sign-avg-aggregate.output';
import { VitalSignSumAggregate } from './vital-sign-sum-aggregate.output';
import { VitalSignMinAggregate } from './vital-sign-min-aggregate.output';
import { VitalSignMaxAggregate } from './vital-sign-max-aggregate.output';

@ObjectType()
export class AggregateVitalSign {

    @Field(() => VitalSignCountAggregate, {nullable:true})
    _count?: VitalSignCountAggregate;

    @Field(() => VitalSignAvgAggregate, {nullable:true})
    _avg?: VitalSignAvgAggregate;

    @Field(() => VitalSignSumAggregate, {nullable:true})
    _sum?: VitalSignSumAggregate;

    @Field(() => VitalSignMinAggregate, {nullable:true})
    _min?: VitalSignMinAggregate;

    @Field(() => VitalSignMaxAggregate, {nullable:true})
    _max?: VitalSignMaxAggregate;
}
