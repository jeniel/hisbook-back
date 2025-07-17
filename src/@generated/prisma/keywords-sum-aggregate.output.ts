import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class KeywordsSumAggregate {

    @Field(() => Int, {nullable:true})
    count?: number;
}
