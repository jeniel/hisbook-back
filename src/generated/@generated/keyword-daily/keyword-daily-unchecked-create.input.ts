import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class keyword_dailyUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    keyword!: string;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => String, {nullable:true})
    tenantId?: string;
}
