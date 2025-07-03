import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Documents_beckerCountAggregate } from './documents-becker-count-aggregate.output';
import { Documents_beckerAvgAggregate } from './documents-becker-avg-aggregate.output';
import { Documents_beckerSumAggregate } from './documents-becker-sum-aggregate.output';
import { Documents_beckerMinAggregate } from './documents-becker-min-aggregate.output';
import { Documents_beckerMaxAggregate } from './documents-becker-max-aggregate.output';

@ObjectType()
export class AggregateDocuments_becker {

    @Field(() => Documents_beckerCountAggregate, {nullable:true})
    _count?: Documents_beckerCountAggregate;

    @Field(() => Documents_beckerAvgAggregate, {nullable:true})
    _avg?: Documents_beckerAvgAggregate;

    @Field(() => Documents_beckerSumAggregate, {nullable:true})
    _sum?: Documents_beckerSumAggregate;

    @Field(() => Documents_beckerMinAggregate, {nullable:true})
    _min?: Documents_beckerMinAggregate;

    @Field(() => Documents_beckerMaxAggregate, {nullable:true})
    _max?: Documents_beckerMaxAggregate;
}
