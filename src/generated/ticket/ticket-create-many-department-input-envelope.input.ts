import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyDepartmentInput } from './ticket-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyDepartmentInputEnvelope {

    @Field(() => [TicketCreateManyDepartmentInput], {nullable:false})
    @Type(() => TicketCreateManyDepartmentInput)
    data!: Array<TicketCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
