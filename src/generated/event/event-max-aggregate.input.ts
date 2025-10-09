import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    startDate?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    detailsUrl?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;
}
