import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketAssignedToInput } from './profile-create-without-ticket-assigned-to.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketAssignedToInput } from './profile-create-or-connect-without-ticket-assigned-to.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutTicketAssignedToInput {

    @Field(() => ProfileCreateWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketAssignedToInput)
    create?: ProfileCreateWithoutTicketAssignedToInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketAssignedToInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketAssignedToInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketAssignedToInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
