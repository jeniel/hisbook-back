import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FeatureCount {

    @Field(() => Int, {nullable:false})
    planFeatures?: number;

    @Field(() => Int, {nullable:false})
    usage?: number;
}
