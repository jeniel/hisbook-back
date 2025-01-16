import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketSubCategoryWhereInput } from './ticket-sub-category-where.input';
import { Type } from 'class-transformer';
import { TicketSubCategoryOrderByWithRelationInput } from './ticket-sub-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketSubCategoryWhereUniqueInput } from './ticket-sub-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketSubCategoryCountAggregateInput } from './ticket-sub-category-count-aggregate.input';
import { TicketSubCategoryMinAggregateInput } from './ticket-sub-category-min-aggregate.input';
import { TicketSubCategoryMaxAggregateInput } from './ticket-sub-category-max-aggregate.input';

@ArgsType()
export class TicketSubCategoryAggregateArgs {

    @Field(() => TicketSubCategoryWhereInput, {nullable:true})
    @Type(() => TicketSubCategoryWhereInput)
    where?: TicketSubCategoryWhereInput;

    @Field(() => [TicketSubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketSubCategoryOrderByWithRelationInput>;

    @Field(() => TicketSubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketSubCategoryWhereUniqueInput, 'id'>;

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
