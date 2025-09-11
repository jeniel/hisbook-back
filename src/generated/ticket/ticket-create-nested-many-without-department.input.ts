import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutDepartmentInput } from './ticket-create-without-department.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutDepartmentInput } from './ticket-create-or-connect-without-department.input';
import { TicketCreateManyDepartmentInputEnvelope } from './ticket-create-many-department-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketCreateNestedManyWithoutDepartmentInput {

    @Field(() => [TicketCreateWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketCreateWithoutDepartmentInput)
    create?: Array<TicketCreateWithoutDepartmentInput>;

    @Field(() => [TicketCreateOrConnectWithoutDepartmentInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutDepartmentInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutDepartmentInput>;

    @Field(() => TicketCreateManyDepartmentInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyDepartmentInputEnvelope)
    createMany?: TicketCreateManyDepartmentInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'id'>>;
}
