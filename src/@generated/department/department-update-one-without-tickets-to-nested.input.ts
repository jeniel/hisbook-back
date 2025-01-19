import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutTicketsToInput } from './department-create-without-tickets-to.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutTicketsToInput } from './department-create-or-connect-without-tickets-to.input';
import { DepartmentUpsertWithoutTicketsToInput } from './department-upsert-without-tickets-to.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutTicketsToInput } from './department-update-to-one-with-where-without-tickets-to.input';

@InputType()
export class DepartmentUpdateOneWithoutTicketsToNestedInput {

    @Field(() => DepartmentCreateWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutTicketsToInput)
    create?: DepartmentCreateWithoutTicketsToInput;

    @Field(() => DepartmentCreateOrConnectWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutTicketsToInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutTicketsToInput;

    @Field(() => DepartmentUpsertWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutTicketsToInput)
    upsert?: DepartmentUpsertWithoutTicketsToInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutTicketsToInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutTicketsToInput)
    update?: DepartmentUpdateToOneWithWhereWithoutTicketsToInput;
}
