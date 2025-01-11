import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PatientRegistrationInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  address: string;
}
