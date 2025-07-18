import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { keyword_dailyWhereInput } from '../keyword-daily/keyword-daily-where.input';

@InputType()
export class Keyword_dailyListRelationFilter {

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    every?: keyword_dailyWhereInput;

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    some?: keyword_dailyWhereInput;

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    none?: keyword_dailyWhereInput;
}
