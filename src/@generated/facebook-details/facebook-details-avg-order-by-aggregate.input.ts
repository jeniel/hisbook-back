import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FacebookDetailsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    fanCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    followersCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    overallStarRating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    engagementCount?: `${SortOrder}`;
}
