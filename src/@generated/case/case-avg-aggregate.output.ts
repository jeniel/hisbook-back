import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CaseAvgAggregate {

    @Field(() => Float, {nullable:true})
    ageOnReg?: number;
}
