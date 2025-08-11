import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateManyPostInput } from './images-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class ImagesCreateManyPostInputEnvelope {

    @Field(() => [ImagesCreateManyPostInput], {nullable:false})
    @Type(() => ImagesCreateManyPostInput)
    data!: Array<ImagesCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
