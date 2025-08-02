import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutPlanInput } from './subscription-create-without-plan.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutPlanInput } from './subscription-create-or-connect-without-plan.input';
import { SubscriptionCreateManyPlanInputEnvelope } from './subscription-create-many-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';

@InputType()
export class SubscriptionCreateNestedManyWithoutPlanInput {

    @Field(() => [SubscriptionCreateWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionCreateWithoutPlanInput)
    create?: Array<SubscriptionCreateWithoutPlanInput>;

    @Field(() => [SubscriptionCreateOrConnectWithoutPlanInput], {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutPlanInput)
    connectOrCreate?: Array<SubscriptionCreateOrConnectWithoutPlanInput>;

    @Field(() => SubscriptionCreateManyPlanInputEnvelope, {nullable:true})
    @Type(() => SubscriptionCreateManyPlanInputEnvelope)
    createMany?: SubscriptionCreateManyPlanInputEnvelope;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id' | 'tenantId'>>;
}
