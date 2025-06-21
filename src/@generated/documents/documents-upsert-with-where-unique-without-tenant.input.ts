import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { documentsWhereUniqueInput } from './documents-where-unique.input';
import { Type } from 'class-transformer';
import { documentsUpdateWithoutTenantInput } from './documents-update-without-tenant.input';
import { documentsCreateWithoutTenantInput } from './documents-create-without-tenant.input';

@InputType()
export class documentsUpsertWithWhereUniqueWithoutTenantInput {

    @Field(() => documentsWhereUniqueInput, {nullable:false})
    @Type(() => documentsWhereUniqueInput)
    where!: Prisma.AtLeast<documentsWhereUniqueInput, 'id'>;

    @Field(() => documentsUpdateWithoutTenantInput, {nullable:false})
    @Type(() => documentsUpdateWithoutTenantInput)
    update!: documentsUpdateWithoutTenantInput;

    @Field(() => documentsCreateWithoutTenantInput, {nullable:false})
    @Type(() => documentsCreateWithoutTenantInput)
    create!: documentsCreateWithoutTenantInput;
}
