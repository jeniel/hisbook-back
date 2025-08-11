import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { Type } from 'class-transformer';
import { DepartmentCreateWithoutUserInput } from './department-create-without-user.input';

@InputType()
export class DepartmentCreateOrConnectWithoutUserInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    @Type(() => DepartmentWhereUniqueInput)
    where!: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentCreateWithoutUserInput, {nullable:false})
    @Type(() => DepartmentCreateWithoutUserInput)
    create!: DepartmentCreateWithoutUserInput;
}
