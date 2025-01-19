import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TicketTransactionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;

    @Field(() => Boolean, {nullable:true})
    departmentFrom?: true;

    @Field(() => Boolean, {nullable:true})
    departmentTo?: true;

    @Field(() => Boolean, {nullable:true})
    ticketCreatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    ticketAssignedTo?: true;

    @Field(() => Boolean, {nullable:true})
    ticketCategoryId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;
}
