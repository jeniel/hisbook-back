import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ImagesScalarWhereWithAggregatesInput {

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => [ImagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImagesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    postId?: StringWithAggregatesFilter;
}
