import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';
import { Type } from 'class-transformer';
import { DepartmentUpdateWithoutProfilesInput } from './department-update-without-profiles.input';

@InputType()
export class DepartmentUpdateToOneWithWhereWithoutProfilesInput {

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;

    @Field(() => DepartmentUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProfilesInput)
    data!: DepartmentUpdateWithoutProfilesInput;
}
