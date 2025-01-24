import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutTicketAssignedByInput } from './profile-update-without-ticket-assigned-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketAssignedByInput } from './profile-create-without-ticket-assigned-by.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutTicketAssignedByInput {

    @Field(() => ProfileUpdateWithoutTicketAssignedByInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketAssignedByInput)
    update!: ProfileUpdateWithoutTicketAssignedByInput;

    @Field(() => ProfileCreateWithoutTicketAssignedByInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketAssignedByInput)
    create!: ProfileCreateWithoutTicketAssignedByInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
