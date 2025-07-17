import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class keywordsWhereInput {

    @Field(() => [keywordsWhereInput], {nullable:true})
    AND?: Array<keywordsWhereInput>;

    @Field(() => [keywordsWhereInput], {nullable:true})
    OR?: Array<keywordsWhereInput>;

    @Field(() => [keywordsWhereInput], {nullable:true})
    NOT?: Array<keywordsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    keyword?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;
}
