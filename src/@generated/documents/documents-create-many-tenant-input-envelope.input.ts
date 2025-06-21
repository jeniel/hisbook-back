import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { documentsCreateManyTenantInput } from './documents-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class documentsCreateManyTenantInputEnvelope {

    @Field(() => [documentsCreateManyTenantInput], {nullable:false})
    @Type(() => documentsCreateManyTenantInput)
    data!: Array<documentsCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
