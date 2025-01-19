import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTicketAssignedToInput } from './profile-update-without-ticket-assigned-to.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutTicketAssignedToInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutTicketAssignedToInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketAssignedToInput)
    data!: ProfileUpdateWithoutTicketAssignedToInput;
}
