import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DocumentsCountAggregate } from './documents-count-aggregate.output';
import { DocumentsMinAggregate } from './documents-min-aggregate.output';
import { DocumentsMaxAggregate } from './documents-max-aggregate.output';

@ObjectType()
export class DocumentsGroupBy {

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => String, {nullable:true})
    client_id?: string;

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => DocumentsCountAggregate, {nullable:true})
    _count?: DocumentsCountAggregate;

    @Field(() => DocumentsMinAggregate, {nullable:true})
    _min?: DocumentsMinAggregate;

    @Field(() => DocumentsMaxAggregate, {nullable:true})
    _max?: DocumentsMaxAggregate;
}
