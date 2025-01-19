import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutTicketCreatedByInput } from './profile-create-without-ticket-created-by.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutTicketCreatedByInput } from './profile-create-or-connect-without-ticket-created-by.input';
import { ProfileUpsertWithoutTicketCreatedByInput } from './profile-upsert-without-ticket-created-by.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutTicketCreatedByInput } from './profile-update-to-one-with-where-without-ticket-created-by.input';

@InputType()
export class ProfileUpdateOneWithoutTicketCreatedByNestedInput {

    @Field(() => ProfileCreateWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileCreateWithoutTicketCreatedByInput)
    create?: ProfileCreateWithoutTicketCreatedByInput;

    @Field(() => ProfileCreateOrConnectWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutTicketCreatedByInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutTicketCreatedByInput;

    @Field(() => ProfileUpsertWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutTicketCreatedByInput)
    upsert?: ProfileUpsertWithoutTicketCreatedByInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutTicketCreatedByInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutTicketCreatedByInput)
    update?: ProfileUpdateToOneWithWhereWithoutTicketCreatedByInput;
}
