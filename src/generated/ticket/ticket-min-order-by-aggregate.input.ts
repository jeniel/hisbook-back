import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TicketMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    subject?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    missedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    floor?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    screenshot?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    message?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    serialNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    remarks?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedBy?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdById?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: `${SortOrder}`;
}
