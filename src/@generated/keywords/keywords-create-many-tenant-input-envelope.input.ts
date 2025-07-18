import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keywordsCreateManyTenantInput } from './keywords-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class keywordsCreateManyTenantInputEnvelope {

    @Field(() => [keywordsCreateManyTenantInput], {nullable:false})
    @Type(() => keywordsCreateManyTenantInput)
    data!: Array<keywordsCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
