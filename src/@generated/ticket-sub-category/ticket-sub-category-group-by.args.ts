import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';
import { Type } from 'class-transformer';
import { TicketSubCategoryOrderByWithAggregationInput } from './ticket-sub-category-order-by-with-aggregation.input';
import { TicketSubCategoryScalarFieldEnum } from './ticket-sub-category-scalar-field.enum';
import { TicketSubCategoryScalarWhereWithAggregatesInput } from './ticket-sub-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TicketSubCategoryCountAggregateInput } from './ticket-sub-category-count-aggregate.input';
import { TicketSubCategoryMinAggregateInput } from './ticket-sub-category-min-aggregate.input';
import { TicketSubCategoryMaxAggregateInput } from './ticket-sub-category-max-aggregate.input';

@ArgsType()
export class TicketSubCategoryGroupByArgs {

    @Field(() => TicketSubCategoryWhereInput, {nullable:true})
    @Type(() => TicketSubCategoryWhereInput)
    where?: TicketSubCategoryWhereInput;

    @Field(() => [TicketSubCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TicketSubCategoryOrderByWithAggregationInput>;

    @Field(() => [TicketSubCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TicketSubCategoryScalarFieldEnum>;

    @Field(() => TicketSubCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: TicketSubCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TicketSubCategoryCountAggregateInput, {nullable:true})
    _count?: TicketSubCategoryCountAggregateInput;

    @Field(() => TicketSubCategoryMinAggregateInput, {nullable:true})
    _min?: TicketSubCategoryMinAggregateInput;

    @Field(() => TicketSubCategoryMaxAggregateInput, {nullable:true})
    _max?: TicketSubCategoryMaxAggregateInput;
}
