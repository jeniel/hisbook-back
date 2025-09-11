import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutTicketsInput } from './department-create-without-tickets.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutTicketsInput } from './department-create-or-connect-without-tickets.input';
import { DepartmentUpsertWithoutTicketsInput } from './department-upsert-without-tickets.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutTicketsInput } from './department-update-to-one-with-where-without-tickets.input';

@InputType()
export class DepartmentUpdateOneRequiredWithoutTicketsNestedInput {

    @Field(() => DepartmentCreateWithoutTicketsInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutTicketsInput)
    create?: DepartmentCreateWithoutTicketsInput;

    @Field(() => DepartmentCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutTicketsInput;

    @Field(() => DepartmentUpsertWithoutTicketsInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutTicketsInput)
    upsert?: DepartmentUpsertWithoutTicketsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutTicketsInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutTicketsInput)
    update?: DepartmentUpdateToOneWithWhereWithoutTicketsInput;
}
