import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureCreateWithoutUsageInput } from './feature-create-without-usage.input';

@InputType()
export class FeatureCreateOrConnectWithoutUsageInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id' | 'name'>;

    @Field(() => FeatureCreateWithoutUsageInput, {nullable:false})
    @Type(() => FeatureCreateWithoutUsageInput)
    create!: FeatureCreateWithoutUsageInput;
}
