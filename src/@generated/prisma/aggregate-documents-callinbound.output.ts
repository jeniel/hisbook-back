import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Documents_callinboundCountAggregate } from './documents-callinbound-count-aggregate.output';
import { Documents_callinboundAvgAggregate } from './documents-callinbound-avg-aggregate.output';
import { Documents_callinboundSumAggregate } from './documents-callinbound-sum-aggregate.output';
import { Documents_callinboundMinAggregate } from './documents-callinbound-min-aggregate.output';
import { Documents_callinboundMaxAggregate } from './documents-callinbound-max-aggregate.output';

@ObjectType()
export class AggregateDocuments_callinbound {

    @Field(() => Documents_callinboundCountAggregate, {nullable:true})
    _count?: Documents_callinboundCountAggregate;

    @Field(() => Documents_callinboundAvgAggregate, {nullable:true})
    _avg?: Documents_callinboundAvgAggregate;

    @Field(() => Documents_callinboundSumAggregate, {nullable:true})
    _sum?: Documents_callinboundSumAggregate;

    @Field(() => Documents_callinboundMinAggregate, {nullable:true})
    _min?: Documents_callinboundMinAggregate;

    @Field(() => Documents_callinboundMaxAggregate, {nullable:true})
    _max?: Documents_callinboundMaxAggregate;
}
