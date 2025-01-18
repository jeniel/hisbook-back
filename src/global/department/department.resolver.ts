import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GeneralMsg } from 'src/common/entities/general-msg.entities';
import { DepartmentService } from './department.service';
import { UpsertDepartmentInput } from './dto/upsert-department.input';
import { Department } from 'src/@generated/department/department.model';
import { DepartmentArgs } from './args/department.args';
import { DepartmentList } from './entities/department.entity';

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
