import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Documents_beckerCountAggregate } from './documents-becker-count-aggregate.output';
import { Documents_beckerMinAggregate } from './documents-becker-min-aggregate.output';
import { Documents_beckerMaxAggregate } from './documents-becker-max-aggregate.output';

@ObjectType()
export class AggregateDocuments_becker {

    @Field(() => Documents_beckerCountAggregate, {nullable:true})
    _count?: Documents_beckerCountAggregate;

    @Field(() => Documents_beckerMinAggregate, {nullable:true})
    _min?: Documents_beckerMinAggregate;

    @Field(() => Documents_beckerMaxAggregate, {nullable:true})
    _max?: Documents_beckerMaxAggregate;
}
