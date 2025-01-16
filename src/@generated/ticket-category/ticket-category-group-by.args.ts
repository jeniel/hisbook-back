import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Type } from 'class-transformer';
import { TicketCategoryOrderByWithAggregationInput } from './ticket-category-order-by-with-aggregation.input';
import { TicketCategoryScalarFieldEnum } from './ticket-category-scalar-field.enum';
import { TicketCategoryScalarWhereWithAggregatesInput } from './ticket-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TicketCategoryCountAggregateInput } from './ticket-category-count-aggregate.input';
import { TicketCategoryMinAggregateInput } from './ticket-category-min-aggregate.input';
import { TicketCategoryMaxAggregateInput } from './ticket-category-max-aggregate.input';

@ArgsType()
export class TicketCategoryGroupByArgs {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;

    @Field(() => [TicketCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TicketCategoryOrderByWithAggregationInput>;

    @Field(() => [TicketCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TicketCategoryScalarFieldEnum>;

    @Field(() => TicketCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: TicketCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TicketCategoryCountAggregateInput, {nullable:true})
    _count?: TicketCategoryCountAggregateInput;

    @Field(() => TicketCategoryMinAggregateInput, {nullable:true})
    _min?: TicketCategoryMinAggregateInput;

    @Field(() => TicketCategoryMaxAggregateInput, {nullable:true})
    _max?: TicketCategoryMaxAggregateInput;
}
