import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FacebookDetailsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    fanCount?: true;

    @Field(() => Boolean, {nullable:true})
    followersCount?: true;

    @Field(() => Boolean, {nullable:true})
    overallStarRating?: true;

    @Field(() => Boolean, {nullable:true})
    engagementCount?: true;
}
