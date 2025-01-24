import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketAssignedByInput } from './profile-create-without-ticket-assigned-by.input';

@InputType()
export class ProfileCreateOrConnectWithoutTicketAssignedByInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutTicketAssignedByInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketAssignedByInput)
    create!: ProfileCreateWithoutTicketAssignedByInput;
}
