import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateManyMutationInput } from './profile-update-many-mutation.input';

@InputType()
export class ProfileUpdateManyWithWhereWithoutDepartmentInput {

    @Field(() => ProfileScalarWhereInput, {nullable:false})
    @Type(() => ProfileScalarWhereInput)
    where!: ProfileScalarWhereInput;

    @Field(() => ProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ProfileUpdateManyMutationInput)
    data!: ProfileUpdateManyMutationInput;
}
