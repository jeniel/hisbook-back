import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class documentsCreateManyInput {

    @Field(() => String, {nullable:true})
    client_id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;
}
