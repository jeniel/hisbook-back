import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacebookPageCreateManyInput } from './facebook-page-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFacebookPageArgs {

    @Field(() => [FacebookPageCreateManyInput], {nullable:false})
    @Type(() => FacebookPageCreateManyInput)
    data!: Array<FacebookPageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
