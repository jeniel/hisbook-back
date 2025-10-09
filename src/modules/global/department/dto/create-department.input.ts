import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  isSupport?: boolean; // optional, defaults to false
}
