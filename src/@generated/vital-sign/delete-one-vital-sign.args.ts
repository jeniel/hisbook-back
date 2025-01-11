import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VitalSignWhereUniqueInput } from './vital-sign-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneVitalSignArgs {

    @Field(() => VitalSignWhereUniqueInput, {nullable:false})
    @Type(() => VitalSignWhereUniqueInput)
    where!: Prisma.AtLeast<VitalSignWhereUniqueInput, 'id'>;
}
