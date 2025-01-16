import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProfileCount {

    @Field(() => Int, {nullable:false})
    tikcetTransaction?: number;

    @Field(() => Int, {nullable:false})
    comment?: number;
}
