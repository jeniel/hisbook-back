import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class keyword_dailyKeywordDateCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;
}
