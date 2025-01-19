import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutTicketCreatedByInput } from './profile-update-without-ticket-created-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketCreatedByInput } from './profile-create-without-ticket-created-by.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutTicketCreatedByInput {

    @Field(() => ProfileUpdateWithoutTicketCreatedByInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketCreatedByInput)
    update!: ProfileUpdateWithoutTicketCreatedByInput;

    @Field(() => ProfileCreateWithoutTicketCreatedByInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketCreatedByInput)
    create!: ProfileCreateWithoutTicketCreatedByInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
