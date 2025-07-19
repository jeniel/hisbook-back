import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { TenantScalarRelationFilter } from '../tenant/tenant-scalar-relation-filter.input';

@InputType()
export class KeywordWhereInput {

    @Field(() => [KeywordWhereInput], {nullable:true})
    AND?: Array<KeywordWhereInput>;

    @Field(() => [KeywordWhereInput], {nullable:true})
    OR?: Array<KeywordWhereInput>;

    @Field(() => [KeywordWhereInput], {nullable:true})
    NOT?: Array<KeywordWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    keyword?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => TenantScalarRelationFilter, {nullable:true})
    tenant?: TenantScalarRelationFilter;
}
