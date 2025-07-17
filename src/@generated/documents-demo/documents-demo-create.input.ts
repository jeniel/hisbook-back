import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class documents_demoCreateInput {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
