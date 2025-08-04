import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Type } from 'class-transformer';
import { PlanCreateWithoutFeaturesInput } from './plan-create-without-features.input';

@InputType()
export class PlanCreateOrConnectWithoutFeaturesInput {

    @Field(() => PlanWhereUniqueInput, {nullable:false})
    @Type(() => PlanWhereUniqueInput)
    where!: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanCreateWithoutFeaturesInput, {nullable:false})
    @Type(() => PlanCreateWithoutFeaturesInput)
    create!: PlanCreateWithoutFeaturesInput;
}
