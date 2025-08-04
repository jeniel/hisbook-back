import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { KeywordsCountAggregate } from './keywords-count-aggregate.output';
import { KeywordsAvgAggregate } from './keywords-avg-aggregate.output';
import { KeywordsSumAggregate } from './keywords-sum-aggregate.output';
import { KeywordsMinAggregate } from './keywords-min-aggregate.output';
import { KeywordsMaxAggregate } from './keywords-max-aggregate.output';

@ObjectType()
export class KeywordsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => KeywordsCountAggregate, {nullable:true})
    _count?: KeywordsCountAggregate;

    @Field(() => KeywordsAvgAggregate, {nullable:true})
    _avg?: KeywordsAvgAggregate;

    @Field(() => KeywordsSumAggregate, {nullable:true})
    _sum?: KeywordsSumAggregate;

    @Field(() => KeywordsMinAggregate, {nullable:true})
    _min?: KeywordsMinAggregate;

    @Field(() => KeywordsMaxAggregate, {nullable:true})
    _max?: KeywordsMaxAggregate;
}
