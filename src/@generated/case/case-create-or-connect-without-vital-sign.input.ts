import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutVitalSignInput } from './case-create-without-vital-sign.input';

@InputType()
export class CaseCreateOrConnectWithoutVitalSignInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;

    @Field(() => CaseCreateWithoutVitalSignInput, {nullable:false})
    @Type(() => CaseCreateWithoutVitalSignInput)
    create!: CaseCreateWithoutVitalSignInput;
}
