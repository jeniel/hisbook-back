import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsCreateWithoutTenantInput } from './keywords-create-without-tenant.input';
import { Type } from 'class-transformer';
import { keywordsCreateOrConnectWithoutTenantInput } from './keywords-create-or-connect-without-tenant.input';
import { keywordsCreateManyTenantInputEnvelope } from './keywords-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { keywordsWhereUniqueInput } from './keywords-where-unique.input';

@InputType()
export class keywordsCreateNestedManyWithoutTenantInput {

    @Field(() => [keywordsCreateWithoutTenantInput], {nullable:true})
    @Type(() => keywordsCreateWithoutTenantInput)
    create?: Array<keywordsCreateWithoutTenantInput>;

    @Field(() => [keywordsCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => keywordsCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<keywordsCreateOrConnectWithoutTenantInput>;

    @Field(() => keywordsCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => keywordsCreateManyTenantInputEnvelope)
    createMany?: keywordsCreateManyTenantInputEnvelope;

    @Field(() => [keywordsWhereUniqueInput], {nullable:true})
    @Type(() => keywordsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<keywordsWhereUniqueInput, 'id' | 'keyword'>>;
}
