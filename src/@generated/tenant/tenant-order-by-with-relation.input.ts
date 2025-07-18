import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { keyword_dailyOrderByRelationAggregateInput } from '../keyword-daily/keyword-daily-order-by-relation-aggregate.input';
import { keywordsOrderByRelationAggregateInput } from '../keywords/keywords-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class TenantOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isActive?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isApprove?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    nanoid?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    chatTableName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    documentTableName?: SortOrderInput;

    @Field(() => keyword_dailyOrderByRelationAggregateInput, {nullable:true})
    keywordDailies?: keyword_dailyOrderByRelationAggregateInput;

    @Field(() => keywordsOrderByRelationAggregateInput, {nullable:true})
    keywords?: keywordsOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;
}
