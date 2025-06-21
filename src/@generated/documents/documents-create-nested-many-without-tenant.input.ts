import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsCreateWithoutTenantInput } from './documents-create-without-tenant.input';
import { Type } from 'class-transformer';
import { documentsCreateOrConnectWithoutTenantInput } from './documents-create-or-connect-without-tenant.input';
import { documentsCreateManyTenantInputEnvelope } from './documents-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';

@InputType()
export class documentsCreateNestedManyWithoutTenantInput {

    @Field(() => [documentsCreateWithoutTenantInput], {nullable:true})
    @Type(() => documentsCreateWithoutTenantInput)
    create?: Array<documentsCreateWithoutTenantInput>;

    @Field(() => [documentsCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => documentsCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<documentsCreateOrConnectWithoutTenantInput>;

    @Field(() => documentsCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => documentsCreateManyTenantInputEnvelope)
    createMany?: documentsCreateManyTenantInputEnvelope;

    @Field(() => [documentsWhereUniqueInput], {nullable:true})
    @Type(() => documentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<documentsWhereUniqueInput, 'id'>>;
}
