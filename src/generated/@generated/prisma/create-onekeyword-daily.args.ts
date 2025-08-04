import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyCreateInput } from '../keyword-daily/keyword-daily-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnekeywordDailyArgs {

    @Field(() => keyword_dailyCreateInput, {nullable:false})
    @Type(() => keyword_dailyCreateInput)
    data!: keyword_dailyCreateInput;
}
