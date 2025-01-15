import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutProfileInput } from './department-create-without-profile.input';
import { Type } from 'class-transformer';
import { DepartmentCreateOrConnectWithoutProfileInput } from './department-create-or-connect-without-profile.input';
import { DepartmentUpsertWithoutProfileInput } from './department-upsert-without-profile.input';
import { DepartmentWhereInput } from './department-where.input';
import { Prisma } from '@prisma/client';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateToOneWithWhereWithoutProfileInput } from './department-update-to-one-with-where-without-profile.input';

@InputType()
export class DepartmentUpdateOneWithoutProfileNestedInput {

    @Field(() => DepartmentCreateWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentCreateWithoutProfileInput)
    create?: DepartmentCreateWithoutProfileInput;

    @Field(() => DepartmentCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentCreateOrConnectWithoutProfileInput)
    connectOrCreate?: DepartmentCreateOrConnectWithoutProfileInput;

    @Field(() => DepartmentUpsertWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentUpsertWithoutProfileInput)
    upsert?: DepartmentUpsertWithoutProfileInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    disconnect?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    @Type(() => DepartmentWhereInput)
    delete?: DepartmentWhereInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    @Type(() => DepartmentWhereUniqueInput)
    connect?: Prisma.AtLeast<DepartmentWhereUniqueInput, 'id'>;

    @Field(() => DepartmentUpdateToOneWithWhereWithoutProfileInput, {nullable:true})
    @Type(() => DepartmentUpdateToOneWithWhereWithoutProfileInput)
    update?: DepartmentUpdateToOneWithWhereWithoutProfileInput;
}
