import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FacebookDetailsCountAggregate } from './facebook-details-count-aggregate.output';
import { FacebookDetailsAvgAggregate } from './facebook-details-avg-aggregate.output';
import { FacebookDetailsSumAggregate } from './facebook-details-sum-aggregate.output';
import { FacebookDetailsMinAggregate } from './facebook-details-min-aggregate.output';
import { FacebookDetailsMaxAggregate } from './facebook-details-max-aggregate.output';

@ObjectType()
export class AggregateFacebookDetails {

    @Field(() => FacebookDetailsCountAggregate, {nullable:true})
    _count?: FacebookDetailsCountAggregate;

    @Field(() => FacebookDetailsAvgAggregate, {nullable:true})
    _avg?: FacebookDetailsAvgAggregate;

    @Field(() => FacebookDetailsSumAggregate, {nullable:true})
    _sum?: FacebookDetailsSumAggregate;

    @Field(() => FacebookDetailsMinAggregate, {nullable:true})
    _min?: FacebookDetailsMinAggregate;

    @Field(() => FacebookDetailsMaxAggregate, {nullable:true})
    _max?: FacebookDetailsMaxAggregate;
}
