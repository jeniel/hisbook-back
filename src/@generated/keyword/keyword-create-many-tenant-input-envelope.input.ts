import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KeywordCreateManyTenantInput } from './keyword-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class KeywordCreateManyTenantInputEnvelope {

    @Field(() => [KeywordCreateManyTenantInput], {nullable:false})
    @Type(() => KeywordCreateManyTenantInput)
    data!: Array<KeywordCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
