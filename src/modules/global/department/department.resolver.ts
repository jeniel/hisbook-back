import { Department } from '@/generated/department/department.model';
import { DepartmentArgs } from '@/modules/global/department/args/department.args';
import { DepartmentList } from '@/modules/global/department/entities/department.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { UpsertDepartmentInput } from './dto/upsert-department.input';

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
