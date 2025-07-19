import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KeywordCreateWithoutTenantInput } from './keyword-create-without-tenant.input';
import { Type } from 'class-transformer';
import { KeywordCreateOrConnectWithoutTenantInput } from './keyword-create-or-connect-without-tenant.input';
import { KeywordCreateManyTenantInputEnvelope } from './keyword-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';

@InputType()
export class KeywordCreateNestedManyWithoutTenantInput {

    @Field(() => [KeywordCreateWithoutTenantInput], {nullable:true})
    @Type(() => KeywordCreateWithoutTenantInput)
    create?: Array<KeywordCreateWithoutTenantInput>;

    @Field(() => [KeywordCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => KeywordCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<KeywordCreateOrConnectWithoutTenantInput>;

    @Field(() => KeywordCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => KeywordCreateManyTenantInputEnvelope)
    createMany?: KeywordCreateManyTenantInputEnvelope;

    @Field(() => [KeywordWhereUniqueInput], {nullable:true})
    @Type(() => KeywordWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>>;
}
