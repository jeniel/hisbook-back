import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Type } from 'class-transformer';
import { KeywordCreateWithoutTenantInput } from './keyword-create-without-tenant.input';

@InputType()
export class KeywordCreateOrConnectWithoutTenantInput {

    @Field(() => KeywordWhereUniqueInput, {nullable:false})
    @Type(() => KeywordWhereUniqueInput)
    where!: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => KeywordCreateWithoutTenantInput, {nullable:false})
    @Type(() => KeywordCreateWithoutTenantInput)
    create!: KeywordCreateWithoutTenantInput;
}
