import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keyword_dailyWhereInput } from '../keyword-daily/keyword-daily-where.input';
import { Type } from 'class-transformer';
import { keyword_dailyOrderByWithRelationInput } from '../keyword-daily/keyword-daily-order-by-with-relation.input';
import { keyword_dailyWhereUniqueInput } from '../keyword-daily/keyword-daily-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Keyword_dailyScalarFieldEnum } from './keyword-daily-scalar-field.enum';

@ArgsType()
export class FindFirstkeywordDailyOrThrowArgs {

    @Field(() => keyword_dailyWhereInput, {nullable:true})
    @Type(() => keyword_dailyWhereInput)
    where?: keyword_dailyWhereInput;

    @Field(() => [keyword_dailyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<keyword_dailyOrderByWithRelationInput>;

    @Field(() => keyword_dailyWhereUniqueInput, {nullable:true})
    cursor?: keyword_dailyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Keyword_dailyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Keyword_dailyScalarFieldEnum}`>;
}
