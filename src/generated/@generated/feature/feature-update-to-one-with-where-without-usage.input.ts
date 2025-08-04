import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutUsageInput } from './feature-update-without-usage.input';

@InputType()
export class FeatureUpdateToOneWithWhereWithoutUsageInput {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => FeatureUpdateWithoutUsageInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutUsageInput)
    data!: FeatureUpdateWithoutUsageInput;
}
