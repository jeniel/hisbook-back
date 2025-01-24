import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTicketAssignedByInput } from './profile-update-without-ticket-assigned-by.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutTicketAssignedByInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutTicketAssignedByInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketAssignedByInput)
    data!: ProfileUpdateWithoutTicketAssignedByInput;
}
