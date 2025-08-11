import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ImagesScalarWhereInput {

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    AND?: Array<ImagesScalarWhereInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    OR?: Array<ImagesScalarWhereInput>;

    @Field(() => [ImagesScalarWhereInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;
}
