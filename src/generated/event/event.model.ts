import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    detailsUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
