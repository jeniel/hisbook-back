import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketAssignedByInput } from './profile-create-without-ticket-assigned-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketAssignedByInput } from './profile-create-or-connect-without-ticket-assigned-by.input';
import { ProfileUpsertWithoutTicketAssignedByInput } from './profile-upsert-without-ticket-assigned-by.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutTicketAssignedByInput } from './profile-update-to-one-with-where-without-ticket-assigned-by.input';

@InputType()
export class ProfileUpdateOneWithoutTicketAssignedByNestedInput {

    @Field(() => ProfileCreateWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketAssignedByInput)
    create?: ProfileCreateWithoutTicketAssignedByInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketAssignedByInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketAssignedByInput;

    @Field(() => ProfileUpsertWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutTicketAssignedByInput)
    upsert?: ProfileUpsertWithoutTicketAssignedByInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutTicketAssignedByInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutTicketAssignedByInput)
    update?: ProfileUpdateToOneWithWhereWithoutTicketAssignedByInput;
}
