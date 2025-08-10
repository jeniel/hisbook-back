import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileCreateNestedManyWithoutDepartmentInput } from '../profile/profile-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => ProfileCreateNestedManyWithoutDepartmentInput, {nullable:true})
    profile?: ProfileCreateNestedManyWithoutDepartmentInput;
}
