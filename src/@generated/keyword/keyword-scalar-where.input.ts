import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class KeywordScalarWhereInput {

    @Field(() => [KeywordScalarWhereInput], {nullable:true})
    AND?: Array<KeywordScalarWhereInput>;

    @Field(() => [KeywordScalarWhereInput], {nullable:true})
    OR?: Array<KeywordScalarWhereInput>;

    @Field(() => [KeywordScalarWhereInput], {nullable:true})
    NOT?: Array<KeywordScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    keyword?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;
}
