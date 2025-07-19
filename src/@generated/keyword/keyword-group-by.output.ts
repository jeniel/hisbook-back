import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { KeywordCountAggregate } from './keyword-count-aggregate.output';
import { KeywordAvgAggregate } from './keyword-avg-aggregate.output';
import { KeywordSumAggregate } from './keyword-sum-aggregate.output';
import { KeywordMinAggregate } from './keyword-min-aggregate.output';
import { KeywordMaxAggregate } from './keyword-max-aggregate.output';

@ObjectType()
export class KeywordGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    tenantId!: string;

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
