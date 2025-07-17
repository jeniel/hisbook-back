import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class keyword_dailyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    count?: `${SortOrder}`;
}
