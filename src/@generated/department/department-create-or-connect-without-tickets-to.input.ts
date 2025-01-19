import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutTicketsToInput } from './department-create-without-tickets-to.input';

@InputType()
export class DepartmentCreateOrConnectWithoutTicketsToInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutTicketsToInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutTicketsToInput)
    create!: DepartmentCreateWithoutTicketsToInput;
}
