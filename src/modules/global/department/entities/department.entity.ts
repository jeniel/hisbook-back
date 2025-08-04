import { Field, ObjectType } from '@nestjs/graphql';
import { Department } from '@/generated/@generated/department/department.model';
import { Meta } from '@/shared/common/entities/pagination-meta';

@ObjectType()
export class DepartmentList {
  @Field(() => [Department])
  data: Department;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
