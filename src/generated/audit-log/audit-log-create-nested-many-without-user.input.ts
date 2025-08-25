import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateWithoutUserInput } from './audit-log-create-without-user.input';
import { Type } from 'class-transformer';
import { AuditLogCreateOrConnectWithoutUserInput } from './audit-log-create-or-connect-without-user.input';
import { AuditLogCreateManyUserInputEnvelope } from './audit-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';

@InputType()
export class AuditLogCreateNestedManyWithoutUserInput {

    @Field(() => [AuditLogCreateWithoutUserInput], {nullable:true})
    @Type(() => AuditLogCreateWithoutUserInput)
    create?: Array<AuditLogCreateWithoutUserInput>;

    @Field(() => [AuditLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuditLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;

    @Field(() => AuditLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuditLogCreateManyUserInputEnvelope)
    createMany?: AuditLogCreateManyUserInputEnvelope;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;
}
