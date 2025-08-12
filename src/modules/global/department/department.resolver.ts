import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Department } from '@/generated/department/department.model';
import { DepartmentArgs } from '@/modules/global/department/args/department.args';
import { DepartmentList } from '@/modules/global/department/entities/department.entity';
import { GeneralMsg } from '@/shared/common/entities/general-msg.entities';

import { DepartmentService } from './department.service';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}

  // Create
  @Mutation(() => GeneralMsg)
  createDepartment(@Args('payload') payload: CreateDepartmentInput) {
    return this.departmentService.create(payload);
  }

  // Find All
  @Query(() => DepartmentList)
  async findAllDepartments(@Args() args: DepartmentArgs) {
    return await this.departmentService.findAll(args);
  }

  // Update
  @Mutation(() => GeneralMsg)
  updateDepartment(
    @Args('id') id: string,
    @Args('payload') payload: UpdateDepartmentInput,
  ) {
    return this.departmentService.update(id, payload);
  }

  // Delete
  @Mutation(() => GeneralMsg)
  deleteDepartment(@Args('id') id: string) {
    return this.departmentService.delete(id);
  }
}
