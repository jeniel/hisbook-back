import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReportCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    session_id?: true;

    @Field(() => Boolean, {nullable:true})
    keywords?: true;

    @Field(() => Boolean, {nullable:true})
    message_intent?: true;

    @Field(() => Boolean, {nullable:true})
    tenantId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    count?: true;

    @Field(() => Boolean, {nullable:true})
    keyword?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
