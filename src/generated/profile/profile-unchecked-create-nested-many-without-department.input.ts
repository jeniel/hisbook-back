import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutDepartmentInput } from './profile-create-without-department.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutDepartmentInput } from './profile-create-or-connect-without-department.input';
import { ProfileCreateManyDepartmentInputEnvelope } from './profile-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedManyWithoutDepartmentInput {

    @Field(() => [ProfileCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileCreateWithoutDepartmentInput)
    create?: Array<ProfileCreateWithoutDepartmentInput>;

    @Field(() => [ProfileCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutDepartmentInput>;

    @Field(() => ProfileCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ProfileCreateManyDepartmentInputEnvelope)
    createMany?: ProfileCreateManyDepartmentInputEnvelope;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;
}
