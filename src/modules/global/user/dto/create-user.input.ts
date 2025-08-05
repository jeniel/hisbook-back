import { Role } from '@/generated/prisma/role.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  hashedPassword!: string;

  @Field(() => [Role], { nullable: true })
  role: Array<keyof typeof Role>;
}

@InputType()
export class CreateProfileInput {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  departmentId?: string;

  @Field(() => Date, { nullable: true })
  birthDate?: Date | string;
}

@InputType()
export class CreateUserProfileInput {
  @Field(() => CreateProfileInput, { nullable: true })
  profile?: CreateProfileInput;

  @Field(() => CreateUserInput, { nullable: true })
  user?: CreateUserInput;
}
