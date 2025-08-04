import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { DepartmentService } from '@/modules/global/department/department.service';
import { UpsertDepartmentInput } from '@/modules/global/department/dto/upsert-department.input';
import { Department } from '@/generated/@generated/department/department.model';
import { DepartmentArgs } from '@/modules/global/department/args/department.args';
import { DepartmentList } from '@/modules/global/department/entities/department.entity';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  @Mutation(() => GeneralMsg)
  upsertDepartment(
    @Args('payload') payload: UpsertDepartmentInput,
    @Args('deptId', { nullable: true }) deptId?: string,
  ) {
    return this.departmentService.upsert(payload, deptId);
  }

  @Query(() => DepartmentList)
  async findAllDepartments(@Args() args: DepartmentArgs) {
    return await this.departmentService.findAll(args);
  }
}
