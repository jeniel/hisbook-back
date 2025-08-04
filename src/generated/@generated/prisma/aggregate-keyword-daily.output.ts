import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Keyword_dailyCountAggregate } from './keyword-daily-count-aggregate.output';
import { Keyword_dailyAvgAggregate } from './keyword-daily-avg-aggregate.output';
import { Keyword_dailySumAggregate } from './keyword-daily-sum-aggregate.output';
import { Keyword_dailyMinAggregate } from './keyword-daily-min-aggregate.output';
import { Keyword_dailyMaxAggregate } from './keyword-daily-max-aggregate.output';

@ObjectType()
export class AggregateKeyword_daily {

    @Field(() => Keyword_dailyCountAggregate, {nullable:true})
    _count?: Keyword_dailyCountAggregate;

    @Field(() => Keyword_dailyAvgAggregate, {nullable:true})
    _avg?: Keyword_dailyAvgAggregate;

    @Field(() => Keyword_dailySumAggregate, {nullable:true})
    _sum?: Keyword_dailySumAggregate;

    @Field(() => Keyword_dailyMinAggregate, {nullable:true})
    _min?: Keyword_dailyMinAggregate;

    @Field(() => Keyword_dailyMaxAggregate, {nullable:true})
    _max?: Keyword_dailyMaxAggregate;
}
