import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreatekeywordsInput } from './report-createkeywords.input';

@InputType()
export class ReportUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => ReportCreatekeywordsInput, {nullable:true})
    keywords?: ReportCreatekeywordsInput;

    @Field(() => String, {nullable:false})
    message_intent!: string;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;
}
