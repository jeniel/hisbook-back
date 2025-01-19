import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutTicketsFromInput } from './department-update-without-tickets-from.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutTicketsFromInput } from './department-create-without-tickets-from.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutTicketsFromInput {

    @Field(() => DepartmentUpdateWithoutTicketsFromInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsFromInput)
    update!: DepartmentUpdateWithoutTicketsFromInput;

    @Field(() => DepartmentCreateWithoutTicketsFromInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutTicketsFromInput)
    create!: DepartmentCreateWithoutTicketsFromInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
