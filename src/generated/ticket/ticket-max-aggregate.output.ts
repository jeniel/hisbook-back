import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';

@ObjectType()
export class TicketMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    subject?: string;

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

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => String, {nullable:true})
    departmentId?: string;
}
