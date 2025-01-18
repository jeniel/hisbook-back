import { Field, ObjectType } from '@nestjs/graphql';
import { Department } from 'src/@generated/department/department.model';
import { Meta } from 'src/common/entities/pagination-meta';

@ObjectType()
export class DepartmentList {
  @Field(() => [Department])
  data: Department;

  @Field(() => Meta, { nullable: true })
  meta: Meta;
}
