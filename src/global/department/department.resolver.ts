import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { DepartmentService } from './department.service';
import { UpsertDepartmentInput } from './dto/upsert-department.input';
import { Department } from './entities/department.entity';

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
}
