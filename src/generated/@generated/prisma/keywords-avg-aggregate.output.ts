import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class KeywordsAvgAggregate {

    @Field(() => Float, {nullable:true})
    count?: number;
}
