import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { Type } from 'class-transformer';
import { ImagesCreateWithoutPostInput } from './images-create-without-post.input';

@InputType()
export class ImagesCreateOrConnectWithoutPostInput {

    @Field(() => ImagesWhereUniqueInput, {nullable:false})
    @Type(() => ImagesWhereUniqueInput)
    where!: Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>;

    @Field(() => ImagesCreateWithoutPostInput, {nullable:false})
    @Type(() => ImagesCreateWithoutPostInput)
    create!: ImagesCreateWithoutPostInput;
}
