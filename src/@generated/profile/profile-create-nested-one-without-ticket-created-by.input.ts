import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketCreatedByInput } from './profile-create-without-ticket-created-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketCreatedByInput } from './profile-create-or-connect-without-ticket-created-by.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutTicketCreatedByInput {

    @Field(() => ProfileCreateWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketCreatedByInput)
    create?: ProfileCreateWithoutTicketCreatedByInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketCreatedByInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketCreatedByInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;
}
