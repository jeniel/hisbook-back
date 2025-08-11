import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutDepartmentInput } from './profile-create-without-department.input';

@InputType()
export class ProfileCreateOrConnectWithoutDepartmentInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'employeeID' | 'userId'>;

    @Field(() => ProfileCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => ProfileCreateWithoutDepartmentInput)
    create!: ProfileCreateWithoutDepartmentInput;
}
