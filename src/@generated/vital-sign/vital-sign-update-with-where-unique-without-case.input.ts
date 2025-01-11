import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Type } from 'class-transformer';
import { VitalSignUpdateWithoutCaseInput } from './vital-sign-update-without-case.input';

@InputType()
export class VitalSignUpdateWithWhereUniqueWithoutCaseInput {

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => VitalSignUpdateWithoutCaseInput, {nullable:false})
    @Type(() => VitalSignUpdateWithoutCaseInput)
    data!: VitalSignUpdateWithoutCaseInput;
}
