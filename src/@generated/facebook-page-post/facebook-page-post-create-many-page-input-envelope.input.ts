import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPagePostCreateManyPageInput } from './facebook-page-post-create-many-page.input';
import { Type } from 'class-transformer';

@InputType()
export class FacebookPagePostCreateManyPageInputEnvelope {

    @Field(() => [FacebookPagePostCreateManyPageInput], {nullable:false})
    @Type(() => FacebookPagePostCreateManyPageInput)
    data!: Array<FacebookPagePostCreateManyPageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
