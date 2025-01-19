import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutTicketCreatedByInput } from './profile-update-without-ticket-created-by.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutTicketCreatedByInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutTicketCreatedByInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutTicketCreatedByInput)
    data!: ProfileUpdateWithoutTicketCreatedByInput;
}
