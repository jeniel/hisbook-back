import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { CreateProfileInput } from './create-profile.input';
import { Gender } from '@/generated/prisma/gender.enum';

@InputType()
export class UpdateProfileInput extends PartialType(CreateProfileInput) {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => Date, { nullable: true })
  birthDate?: Date;

  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  contact?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => Int, { nullable: true })
  employeeID?: number;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  departmentId?: string;
}
