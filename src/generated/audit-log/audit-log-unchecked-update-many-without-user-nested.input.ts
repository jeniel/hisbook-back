import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuditLogCreateWithoutUserInput } from './audit-log-create-without-user.input';
import { Type } from 'class-transformer';
import { AuditLogCreateOrConnectWithoutUserInput } from './audit-log-create-or-connect-without-user.input';
import { AuditLogUpsertWithWhereUniqueWithoutUserInput } from './audit-log-upsert-with-where-unique-without-user.input';
import { AuditLogCreateManyUserInputEnvelope } from './audit-log-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInput } from './audit-log-where-unique.input';
import { AuditLogUpdateWithWhereUniqueWithoutUserInput } from './audit-log-update-with-where-unique-without-user.input';
import { AuditLogUpdateManyWithWhereWithoutUserInput } from './audit-log-update-many-with-where-without-user.input';
import { AuditLogScalarWhereInput } from './audit-log-scalar-where.input';

@InputType()
export class AuditLogUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [AuditLogCreateWithoutUserInput], {nullable:true})
    @Type(() => AuditLogCreateWithoutUserInput)
    create?: Array<AuditLogCreateWithoutUserInput>;

    @Field(() => [AuditLogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuditLogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuditLogCreateOrConnectWithoutUserInput>;

    @Field(() => [AuditLogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuditLogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuditLogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AuditLogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuditLogCreateManyUserInputEnvelope)
    createMany?: AuditLogCreateManyUserInputEnvelope;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogWhereUniqueInput], {nullable:true})
    @Type(() => AuditLogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuditLogWhereUniqueInput, 'id'>>;

    @Field(() => [AuditLogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuditLogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuditLogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AuditLogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuditLogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuditLogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AuditLogScalarWhereInput], {nullable:true})
    @Type(() => AuditLogScalarWhereInput)
    deleteMany?: Array<AuditLogScalarWhereInput>;
}
