import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutTicketsFromInput } from './department-create-without-tickets-from.input';

@InputType()
export class DepartmentCreateOrConnectWithoutTicketsFromInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutTicketsFromInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutTicketsFromInput)
    create!: DepartmentCreateWithoutTicketsFromInput;
}
