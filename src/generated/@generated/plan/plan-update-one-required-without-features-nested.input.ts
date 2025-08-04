import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCreateWithoutFeaturesInput } from './plan-create-without-features.input';
import { Type } from 'class-transformer';
import { PlanCreateOrConnectWithoutFeaturesInput } from './plan-create-or-connect-without-features.input';
import { PlanUpsertWithoutFeaturesInput } from './plan-upsert-without-features.input';
import { Prisma } from '@prisma/client';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { PlanUpdateToOneWithWhereWithoutFeaturesInput } from './plan-update-to-one-with-where-without-features.input';

@InputType()
export class PlanUpdateOneRequiredWithoutFeaturesNestedInput {

    @Field(() => PlanCreateWithoutFeaturesInput, {nullable:true})
    @Type(() => PlanCreateWithoutFeaturesInput)
    create?: PlanCreateWithoutFeaturesInput;

    @Field(() => PlanCreateOrConnectWithoutFeaturesInput, {nullable:true})
    @Type(() => PlanCreateOrConnectWithoutFeaturesInput)
    connectOrCreate?: PlanCreateOrConnectWithoutFeaturesInput;

    @Field(() => PlanUpsertWithoutFeaturesInput, {nullable:true})
    @Type(() => PlanUpsertWithoutFeaturesInput)
    upsert?: PlanUpsertWithoutFeaturesInput;

    @Field(() => PlanWhereUniqueInput, {nullable:true})
    @Type(() => PlanWhereUniqueInput)
    connect?: Prisma.AtLeast<PlanWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PlanUpdateToOneWithWhereWithoutFeaturesInput, {nullable:true})
    @Type(() => PlanUpdateToOneWithWhereWithoutFeaturesInput)
    update?: PlanUpdateToOneWithWhereWithoutFeaturesInput;
}
