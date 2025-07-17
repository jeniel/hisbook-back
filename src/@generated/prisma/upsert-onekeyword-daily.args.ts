import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyWhereUniqueInput } from '../keyword-daily/keyword-daily-where-unique.input';
import { Type } from 'class-transformer';
import { keyword_dailyCreateInput } from '../keyword-daily/keyword-daily-create.input';
import { keyword_dailyUpdateInput } from '../keyword-daily/keyword-daily-update.input';

@ArgsType()
export class UpsertOnekeywordDailyArgs {

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:false})
    @Type(() => keyword_dailyWhereUniqueInput)
    where!: keyword_dailyWhereUniqueInput;

    @Field(() => keyword_dailyCreateInput, {nullable:false})
    @Type(() => keyword_dailyCreateInput)
    create!: keyword_dailyCreateInput;

    @Field(() => keyword_dailyUpdateInput, {nullable:false})
    @Type(() => keyword_dailyUpdateInput)
    update!: keyword_dailyUpdateInput;
}
