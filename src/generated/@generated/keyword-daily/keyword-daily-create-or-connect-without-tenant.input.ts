import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keyword_dailyWhereUniqueInput } from './keyword-daily-where-unique.input';
import { Type } from 'class-transformer';
import { keyword_dailyCreateWithoutTenantInput } from './keyword-daily-create-without-tenant.input';

@InputType()
export class keyword_dailyCreateOrConnectWithoutTenantInput {

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:false})
    @Type(() => keyword_dailyWhereUniqueInput)
    where!: Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>;

    @Field(() => keyword_dailyCreateWithoutTenantInput, {nullable:false})
    @Type(() => keyword_dailyCreateWithoutTenantInput)
    create!: keyword_dailyCreateWithoutTenantInput;
}
