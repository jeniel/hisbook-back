import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutTicketsToInput } from './department-create-without-tickets-to.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutTicketsToInput } from './department-create-or-connect-without-tickets-to.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutTicketsToInput {

    @Field(() => DepartmentCreateWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutTicketsToInput)
    create?: DepartmentCreateWithoutTicketsToInput;

    @Field(() => DepartmentCreateOrConnectWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutTicketsToInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutTicketsToInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;
}
