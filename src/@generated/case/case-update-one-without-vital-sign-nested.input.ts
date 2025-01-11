import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateWithoutVitalSignInput } from './case-create-without-vital-sign.input';
import { Type } from 'class-transformer';
import { CaseCreateOrConnectWithoutVitalSignInput } from './case-create-or-connect-without-vital-sign.input';
import { CaseUpsertWithoutVitalSignInput } from './case-upsert-without-vital-sign.input';
import { CaseWhereInput } from './case-where.input';
import { Prisma } from '@prisma/client';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { CaseUpdateToOneWithWhereWithoutVitalSignInput } from './case-update-to-one-with-where-without-vital-sign.input';

@InputType()
export class CaseUpdateOneWithoutVitalSignNestedInput {

    @Field(() => CaseCreateWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseCreateWithoutVitalSignInput)
    create?: CaseCreateWithoutVitalSignInput;

    @Field(() => CaseCreateOrConnectWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseCreateOrConnectWithoutVitalSignInput)
    connectOrCreate?: CaseCreateOrConnectWithoutVitalSignInput;

    @Field(() => CaseUpsertWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseUpsertWithoutVitalSignInput)
    upsert?: CaseUpsertWithoutVitalSignInput;

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    disconnect?: CaseWhereInput;

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    delete?: CaseWhereInput;

    @Field(() => CaseWhereUniqueInput, {nullable:true})
    @Type(() => CaseWhereUniqueInput)
    connect?: Prisma.AtLeast<CaseWhereUniqueInput, 'id'>;

    @Field(() => CaseUpdateToOneWithWhereWithoutVitalSignInput, {nullable:true})
    @Type(() => CaseUpdateToOneWithWhereWithoutVitalSignInput)
    update?: CaseUpdateToOneWithWhereWithoutVitalSignInput;
}
