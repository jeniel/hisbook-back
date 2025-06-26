import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Documents_demoCountAggregate } from './documents-demo-count-aggregate.output';
import { Documents_demoMinAggregate } from './documents-demo-min-aggregate.output';
import { Documents_demoMaxAggregate } from './documents-demo-max-aggregate.output';

@ObjectType()
export class Documents_demoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Documents_demoCountAggregate, {nullable:true})
    _count?: Documents_demoCountAggregate;

    @Field(() => Documents_demoMinAggregate, {nullable:true})
    _min?: Documents_demoMinAggregate;

    @Field(() => Documents_demoMaxAggregate, {nullable:true})
    _max?: Documents_demoMaxAggregate;
}
