import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImagesCreateWithoutPostInput } from './images-create-without-post.input';
import { Type } from 'class-transformer';
import { ImagesCreateOrConnectWithoutPostInput } from './images-create-or-connect-without-post.input';
import { ImagesUpsertWithWhereUniqueWithoutPostInput } from './images-upsert-with-where-unique-without-post.input';
import { ImagesCreateManyPostInputEnvelope } from './images-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImagesWhereUniqueInput } from './images-where-unique.input';
import { ImagesUpdateWithWhereUniqueWithoutPostInput } from './images-update-with-where-unique-without-post.input';
import { ImagesUpdateManyWithWhereWithoutPostInput } from './images-update-many-with-where-without-post.input';
import { ImagesScalarWhereInput } from './images-scalar-where.input';

@InputType()
export class ImagesUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [ImagesCreateWithoutPostInput], {nullable:true})
    @Type(() => ImagesCreateWithoutPostInput)
    create?: Array<ImagesCreateWithoutPostInput>;

    @Field(() => [ImagesCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => ImagesCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<ImagesCreateOrConnectWithoutPostInput>;

    @Field(() => [ImagesUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => ImagesUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<ImagesUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => ImagesCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => ImagesCreateManyPostInputEnvelope)
    createMany?: ImagesCreateManyPostInputEnvelope;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesWhereUniqueInput], {nullable:true})
    @Type(() => ImagesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImagesWhereUniqueInput, 'id'>>;

    @Field(() => [ImagesUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => ImagesUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<ImagesUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [ImagesUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => ImagesUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<ImagesUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    @Type(() => ImagesScalarWhereInput)
    deleteMany?: Array<ImagesScalarWhereInput>;
}
