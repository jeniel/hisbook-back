import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutDepartmentInput } from './profile-create-without-department.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutDepartmentInput } from './profile-create-or-connect-without-department.input';
import { ProfileUpsertWithWhereUniqueWithoutDepartmentInput } from './profile-upsert-with-where-unique-without-department.input';
import { ProfileCreateManyDepartmentInputEnvelope } from './profile-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutDepartmentInput } from './profile-update-with-where-unique-without-department.input';
import { ProfileUpdateManyWithWhereWithoutDepartmentInput } from './profile-update-many-with-where-without-department.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUncheckedUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [ProfileCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileCreateWithoutDepartmentInput)
    create?: Array<ProfileCreateWithoutDepartmentInput>;

    @Field(() => [ProfileCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => ProfileCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => ProfileCreateManyDepartmentInputEnvelope)
    createMany?: ProfileCreateManyDepartmentInputEnvelope;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>>;

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<ProfileUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => ProfileUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    @Type(() => ProfileScalarWhereInput)
    deleteMany?: Array<ProfileScalarWhereInput>;
}
