import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyWhereUniqueInput } from '../keyword-daily/keyword-daily-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquekeywordDailyOrThrowArgs {

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:false})
    @Type(() => keyword_dailyWhereUniqueInput)
    where!: keyword_dailyWhereUniqueInput;
}
