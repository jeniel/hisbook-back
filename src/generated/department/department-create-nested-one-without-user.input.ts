import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutUserInput } from './department-create-without-user.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutUserInput } from './department-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutUserInput {

    @Field(() => DepartmentCreateWithoutUserInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutUserInput)
    create?: DepartmentCreateWithoutUserInput;

    @Field(() => DepartmentCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutUserInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
