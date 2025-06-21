import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class documents {

    @Field(() => ID, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => Tenant, {nullable:true})
    tenant?: Tenant | null;
}
