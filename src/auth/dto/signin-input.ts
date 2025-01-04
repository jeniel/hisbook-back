import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class SignInInput {
  // @IsEmail()
  // @IsNotEmpty()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @Field(() => String, { nullable: true })
  username: string;
}
