import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VitalSignUpdateInput } from './vital-sign-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';

@ArgsType()
export class UpdateOneVitalSignArgs {

    @Field(() => VitalSignUpdateInput, {nullable:false})
    @Type(() => VitalSignUpdateInput)
    data!: VitalSignUpdateInput;

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;
}
