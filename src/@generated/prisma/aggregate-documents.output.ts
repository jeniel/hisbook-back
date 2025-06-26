import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DocumentsCountAggregate } from './documents-count-aggregate.output';
import { DocumentsMinAggregate } from './documents-min-aggregate.output';
import { DocumentsMaxAggregate } from './documents-max-aggregate.output';

@ObjectType()
export class AggregateDocuments {

    @Field(() => DocumentsCountAggregate, {nullable:true})
    _count?: DocumentsCountAggregate;

    @Field(() => DocumentsMinAggregate, {nullable:true})
    _min?: DocumentsMinAggregate;

    @Field(() => DocumentsMaxAggregate, {nullable:true})
    _max?: DocumentsMaxAggregate;
}
