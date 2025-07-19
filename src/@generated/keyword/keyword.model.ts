import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class Keyword {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {defaultValue:1,nullable:false})
    count!: number;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => Tenant, {nullable:false})
    tenant?: Tenant;
}
