import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProfileInput } from './department-create-without-profile.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProfileInput } from './department-create-or-connect-without-profile.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutProfileInput {

    @Field(() => DepartmentCreateWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProfileInput)
    create?: DepartmentCreateWithoutProfileInput;

    @Field(() => DepartmentCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProfileInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProfileInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
