import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogScalarWhereInput } from './audit-log-scalar-where.input';
import { Type } from 'class-transformer';
import { AuditLogUpdateManyMutationInput } from './audit-log-update-many-mutation.input';

@InputType()
export class AuditLogUpdateManyWithWhereWithoutUserInput {

    @Field(() => AuditLogScalarWhereInput, {nullable:false})
    @Type(() => AuditLogScalarWhereInput)
    where!: AuditLogScalarWhereInput;

    @Field(() => AuditLogUpdateManyMutationInput, {nullable:false})
    @Type(() => AuditLogUpdateManyMutationInput)
    data!: AuditLogUpdateManyMutationInput;
}
