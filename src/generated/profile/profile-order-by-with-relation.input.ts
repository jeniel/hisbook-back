import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    firstName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    middleName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    birthDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    address?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contact?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    secondaryContact?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatar?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    employeeID?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
