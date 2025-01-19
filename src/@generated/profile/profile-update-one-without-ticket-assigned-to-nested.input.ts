import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketAssignedToInput } from './profile-create-without-ticket-assigned-to.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketAssignedToInput } from './profile-create-or-connect-without-ticket-assigned-to.input';
import { ProfileUpsertWithoutTicketAssignedToInput } from './profile-upsert-without-ticket-assigned-to.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutTicketAssignedToInput } from './profile-update-to-one-with-where-without-ticket-assigned-to.input';

@InputType()
export class ProfileUpdateOneWithoutTicketAssignedToNestedInput {

    @Field(() => ProfileCreateWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketAssignedToInput)
    create?: ProfileCreateWithoutTicketAssignedToInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketAssignedToInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketAssignedToInput;

    @Field(() => ProfileUpsertWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutTicketAssignedToInput)
    upsert?: ProfileUpsertWithoutTicketAssignedToInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutTicketAssignedToInput)
    update?: ProfileUpdateToOneWithWhereWithoutTicketAssignedToInput;
}
