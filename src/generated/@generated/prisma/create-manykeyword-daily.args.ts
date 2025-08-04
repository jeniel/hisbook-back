import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyCreateManyInput } from '../keyword-daily/keyword-daily-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManykeywordDailyArgs {

    @Field(() => [keyword_dailyCreateManyInput], {nullable:false})
    @Type(() => keyword_dailyCreateManyInput)
    data!: Array<keyword_dailyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
