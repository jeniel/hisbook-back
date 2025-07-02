import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ID } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class documents {

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => String, {nullable:true})
    client_id!: string | null;

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Tenant, {nullable:true})
    tenant?: Tenant | null;
}
