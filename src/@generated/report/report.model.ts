import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class Report {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    session_id!: string | null;

    @Field(() => [String], {nullable:true})
    keywords!: Array<string>;

    @Field(() => String, {nullable:false})
    message_intent!: string;

    @Field(() => String, {nullable:true})
    tenantId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    createdBy!: string | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Int, {defaultValue:1,nullable:true})
    count!: number | null;

    @Field(() => String, {nullable:true})
    keyword!: string | null;

    @Field(() => Tenant, {nullable:true})
    tenant?: Tenant | null;
}
