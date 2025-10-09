import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentDropdown {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  isSupport?: boolean;
}
