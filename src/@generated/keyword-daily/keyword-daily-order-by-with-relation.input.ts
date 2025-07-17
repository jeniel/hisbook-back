import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';

@InputType()
export class keyword_dailyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    keyword?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    count?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    date?: SortOrderInput;
}
