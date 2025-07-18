import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class keywordsScalarWhereInput {

    @Field(() => [keywordsScalarWhereInput], {nullable:true})
    AND?: Array<keywordsScalarWhereInput>;

    @Field(() => [keywordsScalarWhereInput], {nullable:true})
    OR?: Array<keywordsScalarWhereInput>;

    @Field(() => [keywordsScalarWhereInput], {nullable:true})
    NOT?: Array<keywordsScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    keyword?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tenantId?: StringNullableFilter;
}
