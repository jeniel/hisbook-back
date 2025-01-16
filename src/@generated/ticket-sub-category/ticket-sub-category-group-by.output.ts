import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketSubCategoryCountAggregate } from './ticket-sub-category-count-aggregate.output';
import { TicketSubCategoryMinAggregate } from './ticket-sub-category-min-aggregate.output';
import { TicketSubCategoryMaxAggregate } from './ticket-sub-category-max-aggregate.output';

@ObjectType()
export class TicketSubCategoryGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TicketSubCategoryCountAggregate, {nullable:true})
    _count?: TicketSubCategoryCountAggregate;

    @Field(() => TicketSubCategoryMinAggregate, {nullable:true})
    _min?: TicketSubCategoryMinAggregate;

    @Field(() => TicketSubCategoryMaxAggregate, {nullable:true})
    _max?: TicketSubCategoryMaxAggregate;
}
