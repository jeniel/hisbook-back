import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutTicketsInput } from './department-update-without-tickets.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutTicketsInput } from './department-create-without-tickets.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutTicketsInput {

    @Field(() => DepartmentUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsInput)
    update!: DepartmentUpdateWithoutTicketsInput;

    @Field(() => DepartmentCreateWithoutTicketsInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutTicketsInput)
    create!: DepartmentCreateWithoutTicketsInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
