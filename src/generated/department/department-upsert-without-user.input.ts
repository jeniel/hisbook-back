import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutUserInput } from './department-update-without-user.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutUserInput } from './department-create-without-user.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutUserInput {

    @Field(() => DepartmentUpdateWithoutUserInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutUserInput)
    update!: DepartmentUpdateWithoutUserInput;

    @Field(() => DepartmentCreateWithoutUserInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutUserInput)
    create!: DepartmentCreateWithoutUserInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
