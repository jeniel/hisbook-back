import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FacebookPageCountAggregate } from './facebook-page-count-aggregate.output';
import { FacebookPageAvgAggregate } from './facebook-page-avg-aggregate.output';
import { FacebookPageSumAggregate } from './facebook-page-sum-aggregate.output';
import { FacebookPageMinAggregate } from './facebook-page-min-aggregate.output';
import { FacebookPageMaxAggregate } from './facebook-page-max-aggregate.output';

@ObjectType()
export class AggregateFacebookPage {

    @Field(() => FacebookPageCountAggregate, {nullable:true})
    _count?: FacebookPageCountAggregate;

    @Field(() => FacebookPageAvgAggregate, {nullable:true})
    _avg?: FacebookPageAvgAggregate;

    @Field(() => FacebookPageSumAggregate, {nullable:true})
    _sum?: FacebookPageSumAggregate;

    @Field(() => FacebookPageMinAggregate, {nullable:true})
    _min?: FacebookPageMinAggregate;

    @Field(() => FacebookPageMaxAggregate, {nullable:true})
    _max?: FacebookPageMaxAggregate;
}
