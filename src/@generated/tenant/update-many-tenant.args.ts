import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantUpdateManyMutationInput } from './tenant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TenantWhereInput } from './tenant-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTenantArgs {

    @Field(() => TenantUpdateManyMutationInput, {nullable:false})
    @Type(() => TenantUpdateManyMutationInput)
    data!: TenantUpdateManyMutationInput;

    @Field(() => TenantWhereInput, {nullable:true})
    @Type(() => TenantWhereInput)
    where?: TenantWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
