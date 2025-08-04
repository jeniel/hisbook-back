import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class InviteUserResponse {
  @Field(() => String)
  message!: string;

  @Field(() => String)
  invitationToken!: string;

  @Field(() => String)
  invitationLink!: string;
}

@ObjectType()
export class CompleteProfileResponse {
  @Field(() => String)
  message!: string;

  @Field(() => String)
  userId!: string;

  @Field(() => Boolean)
  success!: boolean;

  @Field(() => String, { nullable: true })
  email?: string;
}
