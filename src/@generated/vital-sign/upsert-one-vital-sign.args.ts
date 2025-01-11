import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Type } from 'class-transformer';
import { VitalSignCreateInput } from './vital-sign-create.input';
import { VitalSignUpdateInput } from './vital-sign-update.input';

@ArgsType()
export class UpsertOneVitalSignArgs {

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;

    @Field(() => VitalSignCreateInput, {nullable:false})
    @Type(() => VitalSignCreateInput)
    create!: VitalSignCreateInput;

    @Field(() => VitalSignUpdateInput, {nullable:false})
    @Type(() => VitalSignUpdateInput)
    update!: VitalSignUpdateInput;
}
