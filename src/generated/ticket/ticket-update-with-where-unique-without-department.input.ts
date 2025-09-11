import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutDepartmentInput } from './ticket-update-without-department.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutDepartmentInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'id'>;

    @Field(() => TicketUpdateWithoutDepartmentInput, {nullable:false})
    @Type(() => TicketUpdateWithoutDepartmentInput)
    data!: TicketUpdateWithoutDepartmentInput;
}
