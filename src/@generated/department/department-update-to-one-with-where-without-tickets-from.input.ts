import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutTicketsFromInput } from './department-update-without-tickets-from.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutTicketsFromInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutTicketsFromInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsFromInput)
    data!: DepartmentUpdateWithoutTicketsFromInput;
}
