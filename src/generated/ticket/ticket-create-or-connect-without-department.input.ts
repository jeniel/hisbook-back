import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutDepartmentInput } from './ticket-create-without-department.input';

@InputType()
export class TicketCreateOrConnectWithoutDepartmentInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketCreateWithoutDepartmentInput, {nullable:false})
    @Type(() => TicketCreateWithoutDepartmentInput)
    create!: TicketCreateWithoutDepartmentInput;
}
