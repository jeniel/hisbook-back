import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCategoryWhereInput } from './ticket-category-where.input';
import { Type } from 'class-transformer';
import { TicketCategoryOrderByWithRelationInput } from './ticket-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TicketCategoryWhereUniqueInput } from './ticket-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketCategoryCountAggregateInput } from './ticket-category-count-aggregate.input';
import { TicketCategoryMinAggregateInput } from './ticket-category-min-aggregate.input';
import { TicketCategoryMaxAggregateInput } from './ticket-category-max-aggregate.input';

@ArgsType()
export class TicketCategoryAggregateArgs {

    @Field(() => TicketCategoryWhereInput, {nullable:true})
    @Type(() => TicketCategoryWhereInput)
    where?: TicketCategoryWhereInput;

    @Field(() => [TicketCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TicketCategoryOrderByWithRelationInput>;

    @Field(() => TicketCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TicketCategoryWhereUniqueInput, 'id'>;

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
