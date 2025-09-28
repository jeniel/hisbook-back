import { Department } from '@/generated/department/department.model';
import { Meta } from '@/shared/common/entities/pagination-meta';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DepartmentList {
  @Field(() => [Department])
  data: Department;

  @Field(() => Meta, { nullable: true })
  meta: Meta;

  @Field()
  isSupport: boolean;
}
