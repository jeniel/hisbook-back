import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignCreateWithoutCaseInput } from './vital-sign-create-without-case.input';
import { Type } from 'class-transformer';
import { VitalSignCreateOrConnectWithoutCaseInput } from './vital-sign-create-or-connect-without-case.input';
import { VitalSignCreateManyCaseInputEnvelope } from './vital-sign-create-many-case-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';

@InputType()
export class VitalSignUncheckedCreateNestedManyWithoutCaseInput {

    @Field(() => [VitalSignCreateWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignCreateWithoutCaseInput)
    create?: Array<VitalSignCreateWithoutCaseInput>;

    @Field(() => [VitalSignCreateOrConnectWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignCreateOrConnectWithoutCaseInput)
    connectOrCreate?: Array<VitalSignCreateOrConnectWithoutCaseInput>;

    @Field(() => VitalSignCreateManyCaseInputEnvelope, {nullable:true})
    @Type(() => VitalSignCreateManyCaseInputEnvelope)
    createMany?: VitalSignCreateManyCaseInputEnvelope;

    @Field(() => [VitalSignWhereUniqueInput], {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>>;
}
