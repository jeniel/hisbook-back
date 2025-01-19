import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutTicketsToInput } from './department-update-without-tickets-to.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutTicketsToInput } from './department-create-without-tickets-to.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutTicketsToInput {

    @Field(() => DepartmentUpdateWithoutTicketsToInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutTicketsToInput)
    update!: DepartmentUpdateWithoutTicketsToInput;

    @Field(() => DepartmentCreateWithoutTicketsToInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutTicketsToInput)
    create!: DepartmentCreateWithoutTicketsToInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
