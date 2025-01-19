import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutTicketsFromInput } from './department-create-without-tickets-from.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutTicketsFromInput } from './department-create-or-connect-without-tickets-from.input';
import { DepartmentUpsertWithoutTicketsFromInput } from './department-upsert-without-tickets-from.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutTicketsFromInput } from './department-update-to-one-with-where-without-tickets-from.input';

@InputType()
export class DepartmentUpdateOneWithoutTicketsFromNestedInput {

    @Field(() => DepartmentCreateWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutTicketsFromInput)
    create?: DepartmentCreateWithoutTicketsFromInput;

    @Field(() => DepartmentCreateOrConnectWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutTicketsFromInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutTicketsFromInput;

    @Field(() => DepartmentUpsertWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutTicketsFromInput)
    upsert?: DepartmentUpsertWithoutTicketsFromInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutTicketsFromInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutTicketsFromInput)
    update?: DepartmentUpdateToOneWithWhereWithoutTicketsFromInput;
}
