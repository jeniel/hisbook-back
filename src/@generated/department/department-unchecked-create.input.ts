import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutDepartmentInput } from '../profile/profile-unchecked-create-nested-many-without-department.input';

@InputType()
export class DepartmentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProfileUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedManyWithoutDepartmentInput;
}
