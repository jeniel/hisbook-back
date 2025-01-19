import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutTicketsFromInput } from './department-create-without-tickets-from.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutTicketsFromInput } from './department-create-or-connect-without-tickets-from.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutTicketsFromInput {

    @Field(() => DepartmentCreateWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutTicketsFromInput)
    create?: DepartmentCreateWithoutTicketsFromInput;

    @Field(() => DepartmentCreateOrConnectWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutTicketsFromInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutTicketsFromInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
