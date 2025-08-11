import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutPostInput } from './images-create-without-post.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutPostInput } from './images-create-or-connect-without-post.input';
import { ImagesCreateManyPostInputEnvelope } from './images-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';

@InputType()
export class ImagesUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [ImagesCreateWithoutPostInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPostInput)
    create?: Array<ImagesCreateWithoutPostInput>;

    @Field(() => [ImagesCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPostInput>;

    @Field(() => ImagesCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPostInputEnvelope)
    createMany?: ImagesCreateManyPostInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;
}
