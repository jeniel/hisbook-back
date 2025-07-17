import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { keywordsCreateManyInput } from './keywords-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManykeywordsArgs {

    @Field(() => [keywordsCreateManyInput], {nullable:false})
    @Type(() => keywordsCreateManyInput)
    data!: Array<keywordsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
