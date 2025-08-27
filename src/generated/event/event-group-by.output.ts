import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EventCountAggregate } from './event-count-aggregate.output';
import { EventMinAggregate } from './event-min-aggregate.output';
import { EventMaxAggregate } from './event-max-aggregate.output';

@ObjectType()
export class EventGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    detailsUrl?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => EventCountAggregate, {nullable:true})
    _count?: EventCountAggregate;

    @Field(() => EventMinAggregate, {nullable:true})
    _min?: EventMinAggregate;

    @Field(() => EventMaxAggregate, {nullable:true})
    _max?: EventMaxAggregate;
}
