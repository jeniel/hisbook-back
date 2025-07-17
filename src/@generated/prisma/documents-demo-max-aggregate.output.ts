import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Documents_demoMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
