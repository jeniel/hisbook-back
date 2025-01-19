import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutTicketCreatedByInput } from './profile-create-without-ticket-created-by.input';

@InputType()
export class ProfileCreateOrConnectWithoutTicketCreatedByInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileCreateWithoutTicketCreatedByInput, {nullable:false})
    @Type(() => ProfileCreateWithoutTicketCreatedByInput)
    create!: ProfileCreateWithoutTicketCreatedByInput;
}
