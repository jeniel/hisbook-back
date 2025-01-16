import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyProfileInput } from './comment-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyProfileInputEnvelope {

    @Field(() => [CommentCreateManyProfileInput], {nullable:false})
    @Type(() => CommentCreateManyProfileInput)
    data!: Array<CommentCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
