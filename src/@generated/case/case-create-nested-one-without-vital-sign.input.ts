import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutVitalSignInput } from './case-create-without-vital-sign.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutVitalSignInput } from './case-create-or-connect-without-vital-sign.input';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@InputType()
export class CaseCreateNestedOneWithoutVitalSignInput {

    @Field(() => CaseCreateWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseCreateWithoutVitalSignInput)
    create?: CaseCreateWithoutVitalSignInput;

    @Field(() => CaseCreateOrConnectWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutVitalSignInput)
    connectOrCreate?: CaseCreateOrConnectWithoutVitalSignInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;
}
