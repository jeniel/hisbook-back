import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketAssignedToInput } from './profile-create-without-ticket-assigned-to.input';

@InputType()
export class ProfileCreateOrConnectWithoutTicketAssignedToInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutTicketAssignedToInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketAssignedToInput)
    create!: ProfileCreateWithoutTicketAssignedToInput;
}
