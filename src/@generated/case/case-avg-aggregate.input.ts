import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaseAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ageOnReg?: true;
}
