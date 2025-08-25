import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AuditLogScalarWhereInput {

    @Field(() => [AuditLogScalarWhereInput], {nullable:true})
    AND?: Array<AuditLogScalarWhereInput>;

    @Field(() => [AuditLogScalarWhereInput], {nullable:true})
    OR?: Array<AuditLogScalarWhereInput>;

    @Field(() => [AuditLogScalarWhereInput], {nullable:true})
    NOT?: Array<AuditLogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timestamp?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updatedBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ticketId?: StringNullableFilter;
}
