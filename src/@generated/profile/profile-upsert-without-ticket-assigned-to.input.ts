import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutTicketAssignedToInput } from './profile-update-without-ticket-assigned-to.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketAssignedToInput } from './profile-create-without-ticket-assigned-to.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutTicketAssignedToInput {

    @Field(() => ProfileUpdateWithoutTicketAssignedToInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketAssignedToInput)
    update!: ProfileUpdateWithoutTicketAssignedToInput;

    @Field(() => ProfileCreateWithoutTicketAssignedToInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketAssignedToInput)
    create!: ProfileCreateWithoutTicketAssignedToInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
