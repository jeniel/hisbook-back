import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutProfilesInput } from './department-update-without-profiles.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutProfilesInput } from './department-create-without-profiles.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutProfilesInput {

    @Field(() => DepartmentUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProfilesInput)
    update!: DepartmentUpdateWithoutProfilesInput;

    @Field(() => DepartmentCreateWithoutProfilesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutProfilesInput)
    create!: DepartmentCreateWithoutProfilesInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
