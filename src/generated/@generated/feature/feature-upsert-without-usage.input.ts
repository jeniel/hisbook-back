import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureUpdateWithoutUsageInput } from './feature-update-without-usage.input';
import { Type } from 'class-transformer';
import { FeatureCreateWithoutUsageInput } from './feature-create-without-usage.input';
import { FeatureWhereInput } from './feature-where.input';

@InputType()
export class FeatureUpsertWithoutUsageInput {

    @Field(() => FeatureUpdateWithoutUsageInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutUsageInput)
    update!: FeatureUpdateWithoutUsageInput;

    @Field(() => FeatureCreateWithoutUsageInput, {nullable:false})
    @Type(() => FeatureCreateWithoutUsageInput)
    create!: FeatureCreateWithoutUsageInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;
}
