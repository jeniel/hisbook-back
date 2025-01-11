import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaseSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ageOnReg?: true;
}
