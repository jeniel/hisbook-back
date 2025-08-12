import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Status } from '../prisma/status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class MissedLogoutTicket {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    missedAt!: Date | null;

    @Field(() => String, {nullable:true})
    floor!: string | null;

    @Field(() => String, {nullable:true})
    screenshot!: string | null;

    @Field(() => Status, {defaultValue:'Pending',nullable:true})
    status!: `${Status}` | null;

    @Field(() => String, {nullable:true})
    updatedBy!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    createdById!: string | null;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;
}
