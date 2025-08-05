import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutDepartmentInput } from './profile-update-without-department.input';

@InputType()
export class ProfileUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutDepartmentInput)
    data!: ProfileUpdateWithoutDepartmentInput;
}
