import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyUpdateManyMutationInput } from '../keyword-daily/keyword-daily-update-many-mutation.input';
import { Type } from 'class-transformer';
import { keyword_dailyWhereInput } from '../keyword-daily/keyword-daily-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManykeywordDailyArgs {

    @Field(() => keyword_dailyUpdateManyMutationInput, {nullable:false})
    @Type(() => keyword_dailyUpdateManyMutationInput)
    data!: keyword_dailyUpdateManyMutationInput;

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    @Type(() => keyword_dailyWhereInput)
    where?: keyword_dailyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
