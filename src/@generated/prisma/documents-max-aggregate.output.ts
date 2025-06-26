import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DocumentsMaxAggregate {

    @Field(() => String, {nullable:true})
    client_id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;
}
