import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyUpdateInput } from '../keyword-daily/keyword-daily-update.input';
import { Type } from 'class-transformer';
import { keyword_dailyWhereUniqueInput } from '../keyword-daily/keyword-daily-where-unique.input';

@ArgsType()
export class UpdateOnekeywordDailyArgs {

    @Field(() => keyword_dailyUpdateInput, {nullable:false})
    @Type(() => keyword_dailyUpdateInput)
    data!: keyword_dailyUpdateInput;

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:false})
    @Type(() => keyword_dailyWhereUniqueInput)
    where!: keyword_dailyWhereUniqueInput;
}
