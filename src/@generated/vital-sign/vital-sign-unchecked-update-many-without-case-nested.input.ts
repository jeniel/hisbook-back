import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VitalSignCreateWithoutCaseInput } from './vital-sign-create-without-case.input';
import { Type } from 'class-transformer';
import { VitalSignCreateOrConnectWithoutCaseInput } from './vital-sign-create-or-connect-without-case.input';
import { VitalSignUpsertWithWhereUniqueWithoutCaseInput } from './vital-sign-upsert-with-where-unique-without-case.input';
import { VitalSignCreateManyCaseInputEnvelope } from './vital-sign-create-many-case-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { VitalSignUpdateWithWhereUniqueWithoutCaseInput } from './vital-sign-update-with-where-unique-without-case.input';
import { VitalSignUpdateManyWithWhereWithoutCaseInput } from './vital-sign-update-many-with-where-without-case.input';
import { VitalSignScalarWhereInput } from './vital-sign-scalar-where.input';

@InputType()
export class VitalSignUncheckedUpdateManyWithoutCaseNestedInput {

    @Field(() => [VitalSignCreateWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignCreateWithoutCaseInput)
    create?: Array<VitalSignCreateWithoutCaseInput>;

    @Field(() => [VitalSignCreateOrConnectWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignCreateOrConnectWithoutCaseInput)
    connectOrCreate?: Array<VitalSignCreateOrConnectWithoutCaseInput>;

    @Field(() => [VitalSignUpsertWithWhereUniqueWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignUpsertWithWhereUniqueWithoutCaseInput)
    upsert?: Array<VitalSignUpsertWithWhereUniqueWithoutCaseInput>;

    @Field(() => VitalSignCreateManyCaseInputEnvelope, {nullable:true})
    @Type(() => VitalSignCreateManyCaseInputEnvelope)
    createMany?: VitalSignCreateManyCaseInputEnvelope;

    @Field(() => [VitalSignWhereUniqueInput], {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>>;

    @Field(() => [VitalSignWhereUniqueInput], {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>>;

    @Field(() => [VitalSignWhereUniqueInput], {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>>;

    @Field(() => [VitalSignWhereUniqueInput], {nullable:true})
    @Type(() => VitalSignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>>;

    @Field(() => [VitalSignUpdateWithWhereUniqueWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignUpdateWithWhereUniqueWithoutCaseInput)
    update?: Array<VitalSignUpdateWithWhereUniqueWithoutCaseInput>;

    @Field(() => [VitalSignUpdateManyWithWhereWithoutCaseInput], {nullable:true})
    @Type(() => VitalSignUpdateManyWithWhereWithoutCaseInput)
    updateMany?: Array<VitalSignUpdateManyWithWhereWithoutCaseInput>;

    @Field(() => [VitalSignScalarWhereInput], {nullable:true})
    @Type(() => VitalSignScalarWhereInput)
    deleteMany?: Array<VitalSignScalarWhereInput>;
}
