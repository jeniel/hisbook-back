import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutProfileInput } from './department-update-without-profile.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutProfileInput } from './department-create-without-profile.input';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentUpsertWithoutProfileInput {

    @Field(() => DepartmentUpdateWithoutProfileInput, {nullable:false})
    @Type(() => DepartmentUpdateWithoutProfileInput)
    update!: DepartmentUpdateWithoutProfileInput;

    @Field(() => DepartmentCreateWithoutProfileInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutProfileInput)
    create!: DepartmentCreateWithoutProfileInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    where?: DepartmentWhereInput;
}
