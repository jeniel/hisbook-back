import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutUserInput } from './department-create-without-user.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutUserInput } from './department-create-or-connect-without-user.input';
import { DepartmentUpsertWithoutUserInput } from './department-upsert-without-user.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutUserInput } from './department-update-to-one-with-where-without-user.input';

@InputType()
export class DepartmentUpdateOneWithoutUserNestedInput {

    @Field(() => DepartmentCreateWithoutUserInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutUserInput)
    create?: DepartmentCreateWithoutUserInput;

    @Field(() => DepartmentCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutUserInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutUserInput;

    @Field(() => DepartmentUpsertWithoutUserInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutUserInput)
    upsert?: DepartmentUpsertWithoutUserInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutUserInput)
    update?: DepartmentUpdateToOneWithWhereWithoutUserInput;
}
