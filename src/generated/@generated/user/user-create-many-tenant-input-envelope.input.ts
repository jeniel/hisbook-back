import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyTenantInput } from './user-create-many-tenant.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyTenantInputEnvelope {

    @Field(() => [UserCreateManyTenantInput], {nullable:false})
    @Type(() => UserCreateManyTenantInput)
    data!: Array<UserCreateManyTenantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
