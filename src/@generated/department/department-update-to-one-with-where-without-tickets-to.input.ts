import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutTicketsToInput } from './department-update-without-tickets-to.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutTicketsToInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutTicketsToInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsToInput)
    data!: DepartmentUpdateWithoutTicketsToInput;
}
