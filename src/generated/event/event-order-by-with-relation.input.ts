import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class EventOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    startDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    endDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    location?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    detailsUrl?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}
