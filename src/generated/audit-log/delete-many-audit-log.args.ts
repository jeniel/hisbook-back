import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogWhereInput } from './audit-log-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAuditLogArgs {

    @Field(() => AuditLogWhereInput, {nullable:true})
    @Type(() => AuditLogWhereInput)
    where?: AuditLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
