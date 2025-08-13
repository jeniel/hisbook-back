import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProfilesInput } from './department-create-without-profiles.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProfilesInput } from './department-create-or-connect-without-profiles.input';
import { DepartmentUpsertWithoutProfilesInput } from './department-upsert-without-profiles.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutProfilesInput } from './department-update-to-one-with-where-without-profiles.input';

@InputType()
export class DepartmentUpdateOneWithoutProfilesNestedInput {

    @Field(() => DepartmentCreateWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProfilesInput)
    create?: DepartmentCreateWithoutProfilesInput;

    @Field(() => DepartmentCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProfilesInput;

    @Field(() => DepartmentUpsertWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutProfilesInput)
    upsert?: DepartmentUpsertWithoutProfilesInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutProfilesInput)
    update?: DepartmentUpdateToOneWithWhereWithoutProfilesInput;
}
