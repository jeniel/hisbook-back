import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPagePostCreateWithoutPageInput } from './facebook-page-post-create-without-page.input';
import { Type } from 'class-transformer';
import { FacebookPagePostCreateOrConnectWithoutPageInput } from './facebook-page-post-create-or-connect-without-page.input';
import { FacebookPagePostUpsertWithWhereUniqueWithoutPageInput } from './facebook-page-post-upsert-with-where-unique-without-page.input';
import { FacebookPagePostCreateManyPageInputEnvelope } from './facebook-page-post-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';
import { FacebookPagePostUpdateWithWhereUniqueWithoutPageInput } from './facebook-page-post-update-with-where-unique-without-page.input';
import { FacebookPagePostUpdateManyWithWhereWithoutPageInput } from './facebook-page-post-update-many-with-where-without-page.input';
import { FacebookPagePostScalarWhereInput } from './facebook-page-post-scalar-where.input';

@InputType()
export class FacebookPagePostUpdateManyWithoutPageNestedInput {

    @Field(() => [FacebookPagePostCreateWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostCreateWithoutPageInput)
    create?: Array<FacebookPagePostCreateWithoutPageInput>;

    @Field(() => [FacebookPagePostCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<FacebookPagePostCreateOrConnectWithoutPageInput>;

    @Field(() => [FacebookPagePostUpsertWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostUpsertWithWhereUniqueWithoutPageInput)
    upsert?: Array<FacebookPagePostUpsertWithWhereUniqueWithoutPageInput>;

    @Field(() => FacebookPagePostCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => FacebookPagePostCreateManyPageInputEnvelope)
    createMany?: FacebookPagePostCreateManyPageInputEnvelope;

    @Field(() => [FacebookPagePostWhereUniqueInput], {nullable:true})
    @Type(() => FacebookPagePostWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>>;

    @Field(() => [FacebookPagePostWhereUniqueInput], {nullable:true})
    @Type(() => FacebookPagePostWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>>;

    @Field(() => [FacebookPagePostWhereUniqueInput], {nullable:true})
    @Type(() => FacebookPagePostWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>>;

    @Field(() => [FacebookPagePostWhereUniqueInput], {nullable:true})
    @Type(() => FacebookPagePostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>>;

    @Field(() => [FacebookPagePostUpdateWithWhereUniqueWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostUpdateWithWhereUniqueWithoutPageInput)
    update?: Array<FacebookPagePostUpdateWithWhereUniqueWithoutPageInput>;

    @Field(() => [FacebookPagePostUpdateManyWithWhereWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostUpdateManyWithWhereWithoutPageInput)
    updateMany?: Array<FacebookPagePostUpdateManyWithWhereWithoutPageInput>;

    @Field(() => [FacebookPagePostScalarWhereInput], {nullable:true})
    @Type(() => FacebookPagePostScalarWhereInput)
    deleteMany?: Array<FacebookPagePostScalarWhereInput>;
}
