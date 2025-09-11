import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutTicketsInput } from './department-update-without-tickets.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutTicketsInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsInput)
    data!: DepartmentUpdateWithoutTicketsInput;
}
