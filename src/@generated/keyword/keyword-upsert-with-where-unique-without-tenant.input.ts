import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KeywordWhereUniqueInput } from './keyword-where-unique.input';
import { Type } from 'class-transformer';
import { KeywordUpdateWithoutTenantInput } from './keyword-update-without-tenant.input';
import { KeywordCreateWithoutTenantInput } from './keyword-create-without-tenant.input';

@InputType()
export class KeywordUpsertWithWhereUniqueWithoutTenantInput {

    @Field(() => KeywordWhereUniqueInput, {nullable:false})
    @Type(() => KeywordWhereUniqueInput)
    where!: Prisma.AtLeast<KeywordWhereUniqueInput, 'id' | 'keyword_tenantId'>;

    @Field(() => KeywordUpdateWithoutTenantInput, {nullable:false})
    @Type(() => KeywordUpdateWithoutTenantInput)
    update!: KeywordUpdateWithoutTenantInput;

    @Field(() => KeywordCreateWithoutTenantInput, {nullable:false})
    @Type(() => KeywordCreateWithoutTenantInput)
    create!: KeywordCreateWithoutTenantInput;
}
