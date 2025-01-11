import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Type } from 'class-transformer';
import { VitalSignUpdateWithoutCaseInput } from './vital-sign-update-without-case.input';
import { VitalSignCreateWithoutCaseInput } from './vital-sign-create-without-case.input';

@InputType()
export class VitalSignUpsertWithWhereUniqueWithoutCaseInput {

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => VitalSignUpdateWithoutCaseInput, {nullable:false})
    @Type(() => VitalSignUpdateWithoutCaseInput)
    update!: VitalSignUpdateWithoutCaseInput;

    @Field(() => VitalSignCreateWithoutCaseInput, {nullable:false})
    @Type(() => VitalSignCreateWithoutCaseInput)
    create!: VitalSignCreateWithoutCaseInput;
}
