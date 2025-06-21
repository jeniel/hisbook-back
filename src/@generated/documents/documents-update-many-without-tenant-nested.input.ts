import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsCreateWithoutTenantInput } from './documents-create-without-tenant.input';
import { Type } from 'class-transformer';
import { documentsCreateOrConnectWithoutTenantInput } from './documents-create-or-connect-without-tenant.input';
import { documentsUpsertWithWhereUniqueWithoutTenantInput } from './documents-upsert-with-where-unique-without-tenant.input';
import { documentsCreateManyTenantInputEnvelope } from './documents-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { documentsUpdateWithWhereUniqueWithoutTenantInput } from './documents-update-with-where-unique-without-tenant.input';
import { documentsUpdateManyWithWhereWithoutTenantInput } from './documents-update-many-with-where-without-tenant.input';
import { documentsScalarWhereInput } from './documents-scalar-where.input';

@InputType()
export class documentsUpdateManyWithoutTenantNestedInput {

    @Field(() => [documentsCreateWithoutTenantInput], {nullable:true})
    @Type(() => documentsCreateWithoutTenantInput)
    create?: Array<documentsCreateWithoutTenantInput>;

    @Field(() => [documentsCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => documentsCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<documentsCreateOrConnectWithoutTenantInput>;

    @Field(() => [documentsUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => documentsUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<documentsUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => documentsCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => documentsCreateManyTenantInputEnvelope)
    createMany?: documentsCreateManyTenantInputEnvelope;

    @Field(() => [documentsWhereUniqueInput], {nullable:true})
    @Type(() => documentsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<documentsWhereUniqueInput, 'id'>>;

    @Field(() => [documentsWhereUniqueInput], {nullable:true})
    @Type(() => documentsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<documentsWhereUniqueInput, 'id'>>;

    @Field(() => [documentsWhereUniqueInput], {nullable:true})
    @Type(() => documentsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<documentsWhereUniqueInput, 'id'>>;

    @Field(() => [documentsWhereUniqueInput], {nullable:true})
    @Type(() => documentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<documentsWhereUniqueInput, 'id'>>;

    @Field(() => [documentsUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => documentsUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<documentsUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [documentsUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => documentsUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<documentsUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [documentsScalarWhereInput], {nullable:true})
    @Type(() => documentsScalarWhereInput)
    deleteMany?: Array<documentsScalarWhereInput>;
}
