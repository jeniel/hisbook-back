import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { UserCreateNestedOneWithoutTicketsInput } from '../user/user-create-nested-one-without-tickets.input';
import { DepartmentCreateNestedOneWithoutTicketsInput } from '../department/department-create-nested-one-without-tickets.input';

@InputType()
export class TicketCreateWithoutAuditLogsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Date, {nullable:true})
    missedAt?: Date | string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    screenshot?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    serialNumber?: string;

    @Field(() => Status, {nullable:true})
    status?: `${Status}`;

    @Field(() => String, {nullable:true})
    remarks?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    updatedBy?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutTicketsInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutTicketsInput;

    @Field(() => DepartmentCreateNestedOneWithoutTicketsInput, {nullable:false})
    department!: DepartmentCreateNestedOneWithoutTicketsInput;
}
