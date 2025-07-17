import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Documents_demoCountAggregate } from './documents-demo-count-aggregate.output';
import { Documents_demoAvgAggregate } from './documents-demo-avg-aggregate.output';
import { Documents_demoSumAggregate } from './documents-demo-sum-aggregate.output';
import { Documents_demoMinAggregate } from './documents-demo-min-aggregate.output';
import { Documents_demoMaxAggregate } from './documents-demo-max-aggregate.output';

@ObjectType()
export class AggregateDocuments_demo {

    @Field(() => Documents_demoCountAggregate, {nullable:true})
    _count?: Documents_demoCountAggregate;

    @Field(() => Documents_demoAvgAggregate, {nullable:true})
    _avg?: Documents_demoAvgAggregate;

    @Field(() => Documents_demoSumAggregate, {nullable:true})
    _sum?: Documents_demoSumAggregate;

    @Field(() => Documents_demoMinAggregate, {nullable:true})
    _min?: Documents_demoMinAggregate;

    @Field(() => Documents_demoMaxAggregate, {nullable:true})
    _max?: Documents_demoMaxAggregate;
}
