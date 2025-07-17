import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class keyword_daily {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {defaultValue:1,nullable:true})
    count!: number | null;

    @Field(() => Date, {nullable:true})
    date!: Date | null;
}
