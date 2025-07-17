import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReportSumAggregate {

    @Field(() => Int, {nullable:true})
    count?: number;
}
