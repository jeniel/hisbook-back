import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuditLogUpdateManyMutationInput } from './audit-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AuditLogWhereInput } from './audit-log-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyAuditLogArgs {

    @Field(() => AuditLogUpdateManyMutationInput, {nullable:false})
    @Type(() => AuditLogUpdateManyMutationInput)
    data!: AuditLogUpdateManyMutationInput;

    @Field(() => AuditLogWhereInput, {nullable:true})
    @Type(() => AuditLogWhereInput)
    where?: AuditLogWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
