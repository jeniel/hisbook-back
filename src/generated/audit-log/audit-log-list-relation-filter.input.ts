import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogWhereInput } from './audit-log-where.input';

@InputType()
export class AuditLogListRelationFilter {

    @Field(() => AuditLogWhereInput, {nullable:true})
    every?: AuditLogWhereInput;

    @Field(() => AuditLogWhereInput, {nullable:true})
    some?: AuditLogWhereInput;

    @Field(() => AuditLogWhereInput, {nullable:true})
    none?: AuditLogWhereInput;
}
