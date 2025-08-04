import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutUsageInput } from './feature-create-without-usage.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutUsageInput } from './feature-create-or-connect-without-usage.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';

@InputType()
export class FeatureCreateNestedOneWithoutUsageInput {

    @Field(() => FeatureCreateWithoutUsageInput, {nullable:true})
    @Type(() => FeatureCreateWithoutUsageInput)
    create?: FeatureCreateWithoutUsageInput;

    @Field(() => FeatureCreateOrConnectWithoutUsageInput, {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutUsageInput)
    connectOrCreate?: FeatureCreateOrConnectWithoutUsageInput;

    @Field(() => FeatureWhereUniqueInput, {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    connect?: Prisma.AtLeast<FeatureWhereUniqueInput, 'id' | 'name'>;
}
