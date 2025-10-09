import { CreateDepartmentInput } from '@/modules/global/department/dto/create-department.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepartmentInput extends PartialType(CreateDepartmentInput) {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field({ nullable: true })
  isSupport?: boolean;
}
