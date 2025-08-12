import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProfilesInput } from './department-create-without-profiles.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProfilesInput } from './department-create-or-connect-without-profiles.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutProfilesInput {

    @Field(() => DepartmentCreateWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProfilesInput)
    create?: DepartmentCreateWithoutProfilesInput;

    @Field(() => DepartmentCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProfilesInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
