import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketAssignedByInput } from './profile-create-without-ticket-assigned-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketAssignedByInput } from './profile-create-or-connect-without-ticket-assigned-by.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutTicketAssignedByInput {

    @Field(() => ProfileCreateWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketAssignedByInput)
    create?: ProfileCreateWithoutTicketAssignedByInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketAssignedByInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketAssignedByInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
