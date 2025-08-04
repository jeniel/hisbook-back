import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TenantCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    isApprove?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    nanoid?: true;

    @Field(() => Boolean, {nullable:true})
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    chatTableName?: true;

    @Field(() => Boolean, {nullable:true})
    documentTableName?: true;

    @Field(() => Boolean, {nullable:true})
    collectionName?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    distance?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
