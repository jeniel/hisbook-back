import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { Type } from 'class-transformer';
import { documentsCreateWithoutTenantInput } from './documents-create-without-tenant.input';

@InputType()
export class documentsCreateOrConnectWithoutTenantInput {

    @Field(() => documentsWhereUniqueInput, {nullable:false})
    @Type(() => documentsWhereUniqueInput)
    where!: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;

    @Field(() => documentsCreateWithoutTenantInput, {nullable:false})
    @Type(() => documentsCreateWithoutTenantInput)
    create!: documentsCreateWithoutTenantInput;
}
