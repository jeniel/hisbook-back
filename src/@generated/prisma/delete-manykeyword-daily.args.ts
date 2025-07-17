import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyWhereInput } from '../keyword-daily/keyword-daily-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManykeywordDailyArgs {

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    @Type(() => keyword_dailyWhereInput)
    where?: keyword_dailyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
