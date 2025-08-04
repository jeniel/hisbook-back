import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyCreateManyTenantInput } from './keyword-daily-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class keyword_dailyCreateManyTenantInputEnvelope {

    @Field(() => [keyword_dailyCreateManyTenantInput], {nullable:false})
    @Type(() => keyword_dailyCreateManyTenantInput)
    data!: Array<keyword_dailyCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
