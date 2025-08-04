import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportsService } from './reports.service';
import { Reports } from './entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Public } from '@/shared/common/decorator/public.decorator';
import { GetAllKeyWorkByTenantArgs } from './args/args';

@Resolver(() => Reports)
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}

  @Query(() => Reports)
  getAllKeyWorkByTenant(@Args() args: GetAllKeyWorkByTenantArgs) {
    return this.reportsService.getAllKeyWorkByTenant(args);
  }

  // @Query(() => Report, { name: 'report' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportsService.findOne(id);
  // }

  // @Mutation(() => Report)
  // updateReport(@Args('updateReportInput') updateReportInput: UpdateReportInput) {
  //   return this.reportsService.update(updateReportInput.id, updateReportInput);
  // }

  // @Mutation(() => Report)
  // removeReport(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportsService.remove(id);
  // }
}
