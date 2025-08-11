import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutUserInput } from './department-update-without-user.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutUserInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutUserInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutUserInput)
    data!: DepartmentUpdateWithoutUserInput;
}
