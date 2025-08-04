import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class keywords {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {defaultValue:1,nullable:true})
    count!: number | null;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => Tenant, {nullable:true})
    tenant?: Tenant | null;
}
