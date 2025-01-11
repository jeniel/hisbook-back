import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Type } from 'class-transformer';
import { VitalSignCreateWithoutCaseInput } from './vital-sign-create-without-case.input';

@InputType()
export class VitalSignCreateOrConnectWithoutCaseInput {

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => VitalSignCreateWithoutCaseInput, {nullable:false})
    @Type(() => VitalSignCreateWithoutCaseInput)
    create!: VitalSignCreateWithoutCaseInput;
}
