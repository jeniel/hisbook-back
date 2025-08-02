import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';

@InputType()
export class FeatureScalarRelationFilter {

    @Field(() => FeatureWhereInput, {nullable:true})
    is?: FeatureWhereInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    isNot?: FeatureWhereInput;
}
