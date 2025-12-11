import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TicketMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    seq?: true;

    @Field(() => Boolean, {nullable:true})
    ticketId?: true;

    @Field(() => Boolean, {nullable:true})
    subject?: true;

    @Field(() => Boolean, {nullable:true})
    missedAt?: true;

    @Field(() => Boolean, {nullable:true})
    floor?: true;

    @Field(() => Boolean, {nullable:true})
    screenshot?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    serialNumber?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    remarks?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdById?: true;

    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
}
