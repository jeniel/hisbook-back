import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KeywordCreateManyInput } from './keyword-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyKeywordArgs {

    @Field(() => [KeywordCreateManyInput], {nullable:false})
    @Type(() => KeywordCreateManyInput)
    data!: Array<KeywordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
