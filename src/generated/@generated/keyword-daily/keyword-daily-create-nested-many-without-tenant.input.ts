import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyCreateWithoutTenantInput } from './keyword-daily-create-without-tenant.input';
import { Type } from 'class-transformer';
import { keyword_dailyCreateOrConnectWithoutTenantInput } from './keyword-daily-create-or-connect-without-tenant.input';
import { keyword_dailyCreateManyTenantInputEnvelope } from './keyword-daily-create-many-tenant-input-envelope.input';
import { Prisma } from '@prisma/client';
import { keyword_dailyWhereUniqueInput } from './keyword-daily-where-unique.input';

@InputType()
export class keyword_dailyCreateNestedManyWithoutTenantInput {

    @Field(() => [keyword_dailyCreateWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyCreateWithoutTenantInput)
    create?: Array<keyword_dailyCreateWithoutTenantInput>;

    @Field(() => [keyword_dailyCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => keyword_dailyCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<keyword_dailyCreateOrConnectWithoutTenantInput>;

    @Field(() => keyword_dailyCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => keyword_dailyCreateManyTenantInputEnvelope)
    createMany?: keyword_dailyCreateManyTenantInputEnvelope;

    @Field(() => [keyword_dailyWhereUniqueInput], {nullable:true})
    @Type(() => keyword_dailyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<keyword_dailyWhereUniqueInput, 'id' | 'keyword_date_tenantId'>>;
}
