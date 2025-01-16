import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketCategoryCountAggregate } from './ticket-category-count-aggregate.output';
import { TicketCategoryMinAggregate } from './ticket-category-min-aggregate.output';
import { TicketCategoryMaxAggregate } from './ticket-category-max-aggregate.output';

@ObjectType()
export class TicketCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketCategoryCountAggregate, {nullable:true})
    _count?: TicketCategoryCountAggregate;

    @Field(() => TicketCategoryMinAggregate, {nullable:true})
    _min?: TicketCategoryMinAggregate;

    @Field(() => TicketCategoryMaxAggregate, {nullable:true})
    _max?: TicketCategoryMaxAggregate;
}
