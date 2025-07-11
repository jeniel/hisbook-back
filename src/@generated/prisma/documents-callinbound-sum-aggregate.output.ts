import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Documents_callinboundSumAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;
}
