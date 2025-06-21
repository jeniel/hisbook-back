import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacebookPagePostCreateWithoutPageInput } from './facebook-page-post-create-without-page.input';
import { Type } from 'class-transformer';
import { FacebookPagePostCreateOrConnectWithoutPageInput } from './facebook-page-post-create-or-connect-without-page.input';
import { FacebookPagePostCreateManyPageInputEnvelope } from './facebook-page-post-create-many-page-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacebookPagePostWhereUniqueInput } from './facebook-page-post-where-unique.input';

@InputType()
export class FacebookPagePostUncheckedCreateNestedManyWithoutPageInput {

    @Field(() => [FacebookPagePostCreateWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostCreateWithoutPageInput)
    create?: Array<FacebookPagePostCreateWithoutPageInput>;

    @Field(() => [FacebookPagePostCreateOrConnectWithoutPageInput], {nullable:true})
    @Type(() => FacebookPagePostCreateOrConnectWithoutPageInput)
    connectOrCreate?: Array<FacebookPagePostCreateOrConnectWithoutPageInput>;

    @Field(() => FacebookPagePostCreateManyPageInputEnvelope, {nullable:true})
    @Type(() => FacebookPagePostCreateManyPageInputEnvelope)
    createMany?: FacebookPagePostCreateManyPageInputEnvelope;

    @Field(() => [FacebookPagePostWhereUniqueInput], {nullable:true})
    @Type(() => FacebookPagePostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacebookPagePostWhereUniqueInput, 'id'>>;
}
