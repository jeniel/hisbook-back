import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { keyword_dailyWhereUniqueInput } from './keyword-daily-where-unique.input';
import { Type } from 'class-transformer';
import { keyword_dailyUpdateWithoutTenantInput } from './keyword-daily-update-without-tenant.input';

@InputType()
export class keyword_dailyUpdateWithWhereUniqueWithoutTenantInput {

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:false})
    @Type(() => keyword_dailyWhereUniqueInput)
    where!: Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date' | 'keyword_date_tenantId'>;

    @Field(() => keyword_dailyUpdateWithoutTenantInput, {nullable:false})
    @Type(() => keyword_dailyUpdateWithoutTenantInput)
    data!: keyword_dailyUpdateWithoutTenantInput;
}
