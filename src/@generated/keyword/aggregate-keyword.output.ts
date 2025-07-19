import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KeywordCountAggregate } from './keyword-count-aggregate.output';
import { KeywordAvgAggregate } from './keyword-avg-aggregate.output';
import { KeywordSumAggregate } from './keyword-sum-aggregate.output';
import { KeywordMinAggregate } from './keyword-min-aggregate.output';
import { KeywordMaxAggregate } from './keyword-max-aggregate.output';

@ObjectType()
export class AggregateKeyword {

    @Field(() => KeywordCountAggregate, {nullable:true})
    _count?: KeywordCountAggregate;

    @Field(() => KeywordAvgAggregate, {nullable:true})
    _avg?: KeywordAvgAggregate;

    @Field(() => KeywordSumAggregate, {nullable:true})
    _sum?: KeywordSumAggregate;

    @Field(() => KeywordMinAggregate, {nullable:true})
    _min?: KeywordMinAggregate;

    @Field(() => KeywordMaxAggregate, {nullable:true})
    _max?: KeywordMaxAggregate;
}
