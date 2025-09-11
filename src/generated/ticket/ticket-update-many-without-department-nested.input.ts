import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutDepartmentInput } from './ticket-create-without-department.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutDepartmentInput } from './ticket-create-or-connect-without-department.input';
import { TicketUpsertWithWhereUniqueWithoutDepartmentInput } from './ticket-upsert-with-where-unique-without-department.input';
import { TicketCreateManyDepartmentInputEnvelope } from './ticket-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutDepartmentInput } from './ticket-update-with-where-unique-without-department.input';
import { TicketUpdateManyWithWhereWithoutDepartmentInput } from './ticket-update-many-with-where-without-department.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUpdateManyWithoutDepartmentNestedInput {

    @Field(() => [TicketCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketCreateWithoutDepartmentInput)
    create?: Array<TicketCreateWithoutDepartmentInput>;

    @Field(() => [TicketCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutDepartmentInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutDepartmentInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => TicketCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyDepartmentInputEnvelope)
    createMany?: TicketCreateManyDepartmentInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;

    @Field(() => [TicketUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutDepartmentInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutDepartmentInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutDepartmentInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutDepartmentInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
