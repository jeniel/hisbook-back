import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumStatusNullableFilter } from '../prisma/enum-status-nullable-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class MissedLogoutTicketWhereInput {

    @Field(() => [MissedLogoutTicketWhereInput], {nullable:true})
    AND?: Array<MissedLogoutTicketWhereInput>;

    @Field(() => [MissedLogoutTicketWhereInput], {nullable:true})
    OR?: Array<MissedLogoutTicketWhereInput>;

    @Field(() => [MissedLogoutTicketWhereInput], {nullable:true})
    NOT?: Array<MissedLogoutTicketWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    missedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    floor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    screenshot?: StringNullableFilter;

    @Field(() => EnumStatusNullableFilter, {nullable:true})
    status?: EnumStatusNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    createdById?: StringNullableFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    createdBy?: UserNullableScalarRelationFilter;
}
