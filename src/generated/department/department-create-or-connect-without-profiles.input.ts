import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutProfilesInput } from './department-create-without-profiles.input';

@InputType()
export class DepartmentCreateOrConnectWithoutProfilesInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id' | 'name'>;

    @Field(() => DepartmentCreateWithoutProfilesInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutProfilesInput)
    create!: DepartmentCreateWithoutProfilesInput;
}
