import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutProfileInput } from './department-update-without-profile.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutProfileInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutProfileInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProfileInput)
    data!: DepartmentUpdateWithoutProfileInput;
}
