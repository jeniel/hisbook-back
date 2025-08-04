import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FacebookPagePostCountAggregate } from './facebook-page-post-count-aggregate.output';
import { FacebookPagePostMinAggregate } from './facebook-page-post-min-aggregate.output';
import { FacebookPagePostMaxAggregate } from './facebook-page-post-max-aggregate.output';

@ObjectType()
export class AggregateFacebookPagePost {

    @Field(() => FacebookPagePostCountAggregate, {nullable:true})
    _count?: FacebookPagePostCountAggregate;

    @Field(() => FacebookPagePostMinAggregate, {nullable:true})
    _min?: FacebookPagePostMinAggregate;

    @Field(() => FacebookPagePostMaxAggregate, {nullable:true})
    _max?: FacebookPagePostMaxAggregate;
}
