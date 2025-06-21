import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DocumentsSumAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;
}
