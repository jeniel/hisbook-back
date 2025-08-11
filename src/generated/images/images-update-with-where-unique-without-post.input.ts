import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesUpdateWithoutPostInput } from './images-update-without-post.input';

@InputType()
export class ImagesUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesUpdateWithoutPostInput, {nullable:false})
    @Type(() => ImagesUpdateWithoutPostInput)
    data!: ImagesUpdateWithoutPostInput;
}
