import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutDepartmentInput } from './profile-update-without-department.input';
import { ProfileCreateWithoutDepartmentInput } from './profile-create-without-department.input';

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'employeeID' | 'userId'>;

    @Field(() => ProfileUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutDepartmentInput)
    update!: ProfileUpdateWithoutDepartmentInput;

    @Field(() => ProfileCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProfileCreateWithoutDepartmentInput)
    create!: ProfileCreateWithoutDepartmentInput;
}
