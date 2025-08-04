import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutPlanInput } from './subscription-create-without-plan.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutPlanInput } from './subscription-create-or-connect-without-plan.input';
import { SubscriptionUpsertWithWhereUniqueWithoutPlanInput } from './subscription-upsert-with-where-unique-without-plan.input';
import { SubscriptionCreateManyPlanInputEnvelope } from './subscription-create-many-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { SubscriptionUpdateWithWhereUniqueWithoutPlanInput } from './subscription-update-with-where-unique-without-plan.input';
import { SubscriptionUpdateManyWithWhereWithoutPlanInput } from './subscription-update-many-with-where-without-plan.input';
import { SubscriptionScalarWhereInput } from './subscription-scalar-where.input';

@InputType()
export class SubscriptionUpdateManyWithoutPlanNestedInput {

    @Field(() => [SubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionCreateWithoutPlanInput)
    create?: Array<SubscriptionCreateWithoutPlanInput>;

    @Field(() => [SubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<SubscriptionCreateOrConnectWithoutPlanInput>;

    @Field(() => [SubscriptionUpsertWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionUpsertWithWhereUniqueWithoutPlanInput)
    upsert?: Array<SubscriptionUpsertWithWhereUniqueWithoutPlanInput>;

    @Field(() => SubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => SubscriptionCreateManyPlanInputEnvelope)
    createMany?: SubscriptionCreateManyPlanInputEnvelope;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>>;

    @Field(() => [SubscriptionUpdateWithWhereUniqueWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionUpdateWithWhereUniqueWithoutPlanInput)
    update?: Array<SubscriptionUpdateWithWhereUniqueWithoutPlanInput>;

    @Field(() => [SubscriptionUpdateManyWithWhereWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionUpdateManyWithWhereWithoutPlanInput)
    updateMany?: Array<SubscriptionUpdateManyWithWhereWithoutPlanInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    @Type(() => SubscriptionScalarWhereInput)
    deleteMany?: Array<SubscriptionScalarWhereInput>;
}
