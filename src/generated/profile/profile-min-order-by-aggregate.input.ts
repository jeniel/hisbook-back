import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    middleName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    birthDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contact?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    avatar?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    employeeID?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
}
