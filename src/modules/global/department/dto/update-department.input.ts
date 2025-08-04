import { CreateDepartmentInput } from '@/modules/global/department/dto/create-department.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDepartmentInput extends PartialType(CreateDepartmentInput) {
  @Field(() => Int)
  id: number;
}
