import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPagePostCreateManyInput } from './facebook-page-post-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacebookPagePostArgs {

    @Field(() => [FacebookPagePostCreateManyInput], {nullable:false})
    @Type(() => FacebookPagePostCreateManyInput)
    data!: Array<FacebookPagePostCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
